import { 
    faConciergeBell,
    faFire,
    faWarehouse,
    faSeedling,
    faTruck,
    faCoffee,
    faTree,
    faCut,
    faLeaf,
    faDoorClosed,
    faDumpster,
    faHammer,
    faMusic,
    faDog,
} from '@fortawesome/free-solid-svg-icons'
  
export const sounds = [
    { 
        title: "Chain Saw",
        src: 'sounds/chainsaw.mp3',
        icon: faTree,
    }, { 
        title: "Coffee Grinder",
        src: 'sounds/coffeegrinder.mp3', 
        icon: faCoffee,
    }, { 
        title: "Doorbell",
        src: 'sounds/doorbell.mp3', 
        icon: faConciergeBell,
    }, { 
        title: "Fire Truck",
        src: 'sounds/firetruck.wav', 
        icon: faFire,
    }, { 
        title: "Garage Door",
        src: 'sounds/garagedoor.mp3', 
        icon: faWarehouse,
    }, { 
        title: "Garbage Truck",
        src: 'sounds/garbagetruck.mp3', 
        icon: faDumpster,
    }, { 
        title: "Lawn Mower",
        src: 'sounds/lawnmower.mp3', 
        icon: faCut,
    }, { 
        title: "Weedeater",
        src: 'sounds/weedeater.mp3', 
        icon: faSeedling,
    }, { 
        title: "Mail Truck",
        src: 'sounds/mailtruck.mp3', 
        icon: faTruck,
    }, { 
        title: "Leaf Blower",
        src: 'sounds/leafblower.mp3', 
        icon: faLeaf,
    }, { 
        title: "Door Knock",
        src: 'sounds/flow.mp3', 
        icon: faDoorClosed,
    }, { 
        title: "Construction",
        src: 'sounds/hammering.mp3', 
        icon: faHammer,
    }, { 
        title: "Piano Practice",
        src: 'sounds/piano.mp3', 
        icon: faMusic,
    }, { 
        title: "Clarinet Practice",
        src: 'sounds/clarinet.mp3', 
        icon: faMusic,
    }, { 
        title: "Barking Dog",
        src: 'sounds/dog.mp3',
        icon: faDog,
    }
];

export const backgrounds = [
    '#009e51',
    '#369b37',
    '#519815',
    '#699300',
    '#7f8d00',
    '#958500',
    '#ac7b00',
    '#c26d00',
    '#d85b00',
    '#ec4100',
    '#ff0000',
];

export const twitterShareLink = `https://twitter.com/share?text=What are the sounds you most enjoy in your work-from-home workspace? Whatever you do, don't wreck your flow. Enjoy these WFH soundscapes from @scottpdawson and @workingrem&url=${window.location.origin}&hashtags=wfh,remotework,soundscapes,leafblowersaremyjam`;

export const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}`;