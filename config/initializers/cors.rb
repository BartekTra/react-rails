Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "*"
    resource "*", headers: :any, methods: [ :get, :head, :post, :patch, :put, :delete, :connect, :options, :trace, :patch ]
  end
end
