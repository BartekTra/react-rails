# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :create_post, Types::PostType, null: false do
      argument :title, String, required: true
      argument :body, String, required: true
    end

    field :update_post, Types::PostType, null: false do
      argument :id, ID, required: true
      argument :title, String, required: false
      argument :body, String, required: false
    end

    field :delete_post, Boolean, null: false do
      argument :id, ID, required: true
    end

    def create_post(title:, body:)
      Post.create!(title: title, body: body)
    end

    def update_post(id:, title: nil, body: nil)
      post = Post.find(id)
      post.update!(title: title, body: body)
      post
    end

    def delete_post(id:)
      post = Post.find(id)
      post.destroy
      true
    end
  end
end
