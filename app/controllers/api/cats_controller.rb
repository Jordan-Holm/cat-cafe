class Api::CatsController < ApplicationController
  # make sure you are login before you use the controller 
  before_action :authenticate_user!
  before_action :set_cat, only: [:show, :update, :destroy]

  # current_user - obj of current login user info
  def index
    render json: current_user.cats 
  end

  def show
    render json: @cat 
  end

  def create
    @cat = current_user.cats.new(cat_params)
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

  def randomcats 
    render json: Cat.all.sample 
  end

  private 
    def cat_params
      params.require(:cat).permit(:name, :breed, :registry, :avatar)
    end

    def set_cat
      @cat = current_user.cats.find(params[:id])
    end
end