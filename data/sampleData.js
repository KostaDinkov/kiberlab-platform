const sectionType = {video: 'video', reading: 'reading', game: 'game', quiz: 'quiz'};

export default {

    l1: {
        name: 'Introduction',
        description: '',
        sections: {
            l1s1: {
                name: 'Welcome to Javascript',
                type: sectionType.video,
                videoEmbedUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mNKz3devFAw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
                points: 5
            },
            l1s2: {
                name: 'Your first Js program',
                type: sectionType.reading,
                sourceUrl: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque, autem debitis laboriosam maxime, molestiae nesciunt nisi nulla officia provident quas quis reprehenderit, soluta tempore veniam. Fugit quasi suscipit tenetur!</p>',
                points: 10,
            }
        }

    },
    l2: {
        name: 'Introduction',
        description: '',
        sections: {
            l1s1: {
                name: 'Welcome to Javascript',
                type: sectionType.video,
                videoEmbedUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mNKz3devFAw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
                points: 5
            },
            l1s2: {
                name: 'Your first Js program',
                type: sectionType.reading,
                sourceUrl: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque, autem debitis laboriosam maxime, molestiae nesciunt nisi nulla officia provident quas quis reprehenderit, soluta tempore veniam. Fugit quasi suscipit tenetur!</p>',
                points: 10,
            }
        }

    }
}

