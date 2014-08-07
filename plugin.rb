# name: skye-plugin
# about: Skye Items support for Discourse
# version: 0.1
# authors: Alain Leon

register_asset('javascripts/skye.js.erb', :server_side)
register_asset('stylesheets/skye.css')
register_asset('javascripts/jquery.qtip.min.js')
register_asset('stylesheets/jquery.qtip.min.css')
register_asset('javascripts/popover.js')

after_initialize do

  # whitelist emojis so that new user can post emojis
  Post::white_listed_image_classes << "skye"

end
