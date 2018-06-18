const sectionType = {video: 'video', reading: 'reading', game: 'game', quiz: 'quiz'};
export default {
    courses: {
        JS101: {
            id:"JS101",
            imageUrl: './assets/batman.jpg',
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
                    name: 'Console',
                    description: '',
                    sections: {
                        l2s1: {
                            name: 'Log messages',
                            type: sectionType.video,
                            videoEmbedUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mNKz3devFAw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
                            points: 5
                        },
                        l2s2: {
                            name: 'Math operations',
                            type: sectionType.reading,
                            sourceUrl: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque, autem debitis laboriosam maxime, molestiae nesciunt nisi nulla officia provident quas quis reprehenderit, soluta tempore veniam. Fugit quasi suscipit tenetur!</p>',
                            points: 10,
                        }
                    }
                }
            },
        },
        JS102: {
            id:"JS102",
            imageUrl: './assets/ironman.jpg',
            name: "Advanced Javascript",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae fugiat natus nobis pariatur quam qui quos, saepe. Aut, magnam, rem.",
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
                    name: 'Console',
                    description: '',
                    sections: {
                        l2s1: {
                            name: 'Log messages',
                            type: sectionType.video,
                            videoEmbedUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mNKz3devFAw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
                            points: 5
                        },
                        l2s2: {
                            name: 'Math operations',
                            type: sectionType.reading,
                            sourceUrl: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque, autem debitis laboriosam maxime, molestiae nesciunt nisi nulla officia provident quas quis reprehenderit, soluta tempore veniam. Fugit quasi suscipit tenetur!</p>',
                            points: 10,
                        }
                    }
                }
            },
        },
        JS103: {
            id:"JS103",
            imageUrl: './assets/joker.jpg',
            name: "Expert Javascript",
            description: "Beatae fugiat natus nobis pariatur quam qui quos, saepe. Aut, magnam, rem.",
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
                    name: 'Console',
                    description: '',
                    sections: {
                        l2s1: {
                            name: 'Log messages',
                            type: sectionType.video,
                            videoEmbedUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mNKz3devFAw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
                            points: 5
                        },
                        l2s2: {
                            name: 'Math operations',
                            type: sectionType.reading,
                            sourceUrl: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque, autem debitis laboriosam maxime, molestiae nesciunt nisi nulla officia provident quas quis reprehenderit, soluta tempore veniam. Fugit quasi suscipit tenetur!</p>',
                            points: 10,
                        }
                    }
                }
            },
        },
    },
    activeUser: {
        id: 'uId0001',
        courses: ['JS101'],
        firstName: "Kosta",
        lastName: "Dinkov",
        progress: {
            JS101: {
                JS101l1s1: 1,
                JS101l1s2: 0.75,
            }
        },
        scores: {
            JS101: {
                JS101q1: 100,
                JS101q2: 50,
                JS101q3: 0,
            }
        },
        achievements:['ach001','ach002'],

    },
    users: {
        uid0001: {
            id: 'uId0001',
            courses: ['JS101'],
            firstName: "Kosta",
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
    },
    achievements:{
        ach001:{
            id:'ach001',
            name:'Padwan',
            description:'Complete a course',
            points:10,
            imageUrl:'./assets/ach/Star Wars - The Clone Wars 3.png',
            dateAchieved:'01-01-2018',
            type:'common',
        },
        ach002:{
            id:'ach002',
            name:'Focused',
            description:'Complete 3 courses',
            points:10,
            imageUrl:'./assets/ach/Star Wars - The Old Republic.png',
            dateAchieved:'12-03-2018',
            type:'rare',
        },

    }
}

