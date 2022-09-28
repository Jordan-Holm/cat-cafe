class Api::NotesController < ApplicationController
  
  before_action :set_parent
  before_action :set_note, only: [:show, :update, :destroy]

  def index
  end

  def show
    render json: @note
  end

  def create
    @note = Note.new(note_params)
    if @note.save
      render json: @note
    else
      render json: { errors: @note.errors }, status: :unprocessable_entity
  end

  def update
    if @note.update
      render json: @note
    else
      render json: { errors: @note.errors }, status: :unprocessable_entity
  end

  def destroy
    @note.destroy
    render json: { message: 'note deleted'}
  end

  private

    def note_params
      params.require(:note).permit(:ndate, :ntime, :subject, :body)
    end

    def set_parent
      @cat = Cat.find(params[:cat_id])
    end

    def set_note
      @note = @cat.note.find(params[:id])
    end
end
