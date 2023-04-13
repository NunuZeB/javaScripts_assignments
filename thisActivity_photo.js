// creating photoSlideShow
const photoSlideShow = {
    photoList: ["photo1","photo2","photo3", "photo4"],
    currentPhotoIndex: 0,
    nextPhoto: function(){
        //if end of the photos display end of the slide show otherwise return the current photo
        this.currentPhotoIndex ++;
        if( this.currentPhotoIndex >= this.photoList.length){
        console.log('End of the slideshow');
        }
        else
            return this.getCurrentPhoto();
       // console.log (this.photoList[this.currentPhotoIndex]);
    },
    //if the index is less than 0display end of the slide show otherwise return the current photo
    prevPhoto: function(){
            this.currentPhotoIndex --;
            if( this.currentPhotoIndex < 0){
                console.log('End of the slideshow');
                }
                else
                    return this.getCurrentPhoto();
    },
    //display the current photo from the photo list
    getCurrentPhoto:function(){
        console.log (this.photoList[this.currentPhotoIndex]);
    
    },
}
photoSlideShow.getCurrentPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.nextPhoto();
