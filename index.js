
// console.log(e.target.closest('li'))

class FirstSite {
    constructor() {
        this.videos = {
            video1: './video/movie1.mp4',
            video2: './video/movie2.mp4',
            video3: './video/movie3.mp4',
            video4: './video/movie4.mp4'
        }
        this.posters = {
            poster1: './image/section4-movie1.jpg',
            poster2: './image/section4-movie2.jpg',
            poster3: './image/section4-movie3.jpg',
            poster4: './image/section4-movie4.jpg'

        }

        this.mainScreen = document.querySelector('.section4 .mainVideo video');
        this.listVideo = document.querySelector('.section4 .listVideo ul');

        this.listVideo.addEventListener('click', (e) => this.renderFirstVideo(e));

    }

    renderFirstVideo(e) {
        e.preventDefault();

        // e.target.closest('li').className == 'first' ?
        //     this.mainScreen.setAttribute('src', this.videos.video1)
        //     & this.mainScreen.setAttribute('poster', this.posters.poster1)
        //     : e.target.closest('li').className == 'second' ? 
        //     this.mainScreen.setAttribute('src', this.videos.video2)
        //     & this.mainScreen.setAttribute('poster', this.posters.poster2)
        //     : e.target.closest('li').className == 'second' ? 
        //     this.mainScreen.setAttribute('src', this.videos.video2)
        //     & this.mainScreen.setAttribute('poster', this.posters.poster2)
        



        if (e.target.closest('li').className == 'first') {
            this.mainScreen.setAttribute('src', this.videos.video1);
            this.mainScreen.setAttribute('poster', this.posters.poster1);
            this.mainScreen.setAttribute('autoplay', 'autoplay')
        }
        else if (e.target.closest('li').className == 'second') {
            this.mainScreen.setAttribute('src', this.videos.video2);
            this.mainScreen.setAttribute('poster', this.posters.poster2);
            this.mainScreen.setAttribute('autoplay', 'autoplay')
        } else if (e.target.closest('li').className == 'third') {
            this.mainScreen.setAttribute('src', this.videos.video3);
            this.mainScreen.setAttribute('poster', this.posters.poster3);
            this.mainScreen.setAttribute('autoplay', 'autoplay')
        } else if (e.target.closest('li').className == 'fourth') {
            this.mainScreen.setAttribute('src', this.videos.video4);
            this.mainScreen.setAttribute('poster', this.posters.poster4);
            this.mainScreen.setAttribute('autoplay', 'autoplay')
        }
    }
    
}

const firstSite = new FirstSite;