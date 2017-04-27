require './app'
require './middlewares/naves_backend'

use Naves::NavesBackend

run Naves::App
