register_asset('javascripts/skye.js.erb', :server_side)
register_asset('stylesheets/skye.css')
register_asset('javascripts/jquery.qtip.min.js')
register_asset('stylesheets/jquery.qtip.min.css')
register_asset('javascripts/popover.js')

after_initialize do

#  module SkyeItems
#    class Engine < ::Rails::Engine
#      engine_name "skye_popover"
#      isolate_namespace SkyePopover
#    end
#    
#    class SkyePopoverPluginController < ActionController::Base
#    end
#  end

  # whitelist emojis so that new user can post emojis
  Post::white_listed_image_classes << "skye"

end
