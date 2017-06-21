import Pad from './pad';
import ServerClient from '../server-client';
import $ from 'jquery';

$(function() {
  const SERVER_URL = '<%= @scheme %>' + location.host;
  let sc;
  let moveArea, shootArea;

	const joinGame = () => {
    const name = $('input#name').val();
    sc.getRecord(name).whenIsReady((record) => {
      record.setInitial({
        name: name,
        moving: false,
        shooting: false,
        bodyRotation: 0,
        turretRotation: 0
			});

      moveArea.setRecord(record);
      shootArea.setRecord(record);

      record.once('delete',  () => {
        $('.overlay')
          .addClass('game-over')
          .fadeIn(300);
        $('#game-over button').one('touch click', joinGame);
			});


      $('.overlay').removeClass('game-over').fadeOut(500);
    });
	};

	const startApp = () => {
		const setSize = () => {
			moveArea.setSize();
			shootArea.setSize();
		}

    moveArea = new Pad('move');
    shootArea = new Pad('shoot');

		$(window).resize(setSize);
		setSize();

		$('#enter-name').submit(function(event) {
			event.preventDefault();
			joinGame();
		});
	};

	// ds = deepstream(DEEPSTREAM_URL).login({},  startApp );
  sc = new ServerClient(SERVER_URL);
  sc.onLogin(startApp);
});
