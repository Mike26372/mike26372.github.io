var colors = {
  'slate': '#262626',
  'whitish': '#f5f5f5',
  'light-grey': '#dcdcdc',
  'dark-grey' : '#45444c',
  'grey': '#898890',
  'lightest-grey': '#b9b9b9'

}

var projects = [
  {
    title: 'Bento',
    description: 'A lightweight, efficient and customizable productivity dashboard',
    url: 'http://www.bentoboard.co',
    github: 'https://github.com/HR-Dwarves/Bento',
    style: {
      'color': colors['whitish'],
      'backgroundColor': colors['slate']
    }
  },
  {
    title: 'Legislation Watch',
    description: 'Legislation tracking application for real-time updates',
    url: '',
    github: 'https://github.com/teamPupAndSuds/Legislation-Watch',
    style: {
      'color': colors['whitish'],
      'backgroundColor': colors['dark-grey']
    }
  }, 
  {
    title: 'Rippl',
    description: 'Sentiment analysis application for analyzing public twitter handles',
    url: '',
    github: 'https://github.com/teamPupAndSuds/Rippl',
    style: {
      'color': colors['whitish'],
      'backgroundColor': colors['grey']
    }
  }, 
  {
    title: 'Somnium',
    description: 'Simple, material-design productivity application',
    url: '',
    github: 'https://github.com/Mike26372/Somnium',
    style: {
      'color': colors['slate'],
      'backgroundColor': colors['lightest-grey']
    }
  }
];

export default projects;