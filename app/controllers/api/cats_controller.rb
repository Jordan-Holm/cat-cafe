class Api::CatsController < ApplicationController
#  makes sure you are login in before you use the controller
  before_action :authenticate_user!
# current_user - obbj of current login user info

  before_action :set_cat, only: [:show, :update, :destroy]

  def index
    render json: current_user.cats
  end

  def show
    render json: @cat
  end

  def create
    @cat = Cat.new(cat_params)
    if @cat.save
      render json: @cat
    else
      render json: { errors: @cat.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @cat.update(cat_params)
      render json: @cat
    else
      render json: { errors: @cat.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @cat.destroy
    render json: { message: 'Cat Released'}
  end

  private

    def set_cat
      @cat = current_user.cats.find(params[:id])
    end

    def cat_params
      params.require(:cat).permit(:name, :breed, :registry, :avatar )
    end 

end
