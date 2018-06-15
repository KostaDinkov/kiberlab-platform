const sectionType = {video: 'video', reading: 'reading', game: 'game', quiz: 'quiz'};
export default {
    courses: {
        JS101: {
            name: "Introduction to Javascript",
            description: "Some descriptions of the course here",
            lessons: {
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
            },
        }
    },
    users: {
        uId0001: {
            id: 'uId0001',
            courses: ['JS101'],
            fistName: "Kosta",
            lastName: "Dinkov",
            progress: {
                JS101: {
                    JS101l1s1: 1,
                    JS101l1s2: 1,
                }
            },
            scores: {
                JS101: {
                    JS101q1: 100,
                    JS101q2: 50,
                    JS101q3: 0,
                }
            },
            achievements: []
        }
    }
}

