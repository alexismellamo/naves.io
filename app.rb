require 'sinatra/base'
require 'redis'

module Naves
  class App < Sinatra::Base
    before do
      headers 'Access-Control-Allow-Origin' => '*',
                'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST']
    end

    set :protection, false

    def initialize
      super()
      uri = URI.parse(ENV['REDISCLOUD_URL'])
      @redis = Redis.new(host: uri.host, port: uri.port, password: uri.password)
    end

    get '/' do
      erb :"game.html"
    end

    get '/controls' do
      erb :"controls.html"
    end

    get '/js/control.js' do
      @scheme = ENV['RACK_ENV'] == "production" ? "wss://" : "ws://"
      erb :"control.js"
    end

    get '/js/game.js' do
      @scheme = ENV['RACK_ENV'] == "production" ? "wss://" : "ws://"
      erb :"game.js"
    end

    get '/:player' do
      record = @redis.get(params['player'])
      p record
      content_type :json
      record ? record : '{}'
    end
  end
end
