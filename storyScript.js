// nathan shulkin made this. thanks for being here.
// have a nice day. or don't.
//

const app = document.getElementById('root');

const mainContainer = document.createElement('div');
mainContainer.setAttribute('class', 'container');

const moon = document.createElement('div');
moon.setAttribute('class', 'card');


// for gitting JSON file

// \brief get JSON file
// \param(file_name) target JSON file name
// \ret JSON file
function get_json(file_name) {
	var requester = create_http_request();
	requester.open("GET", file_name, false);
	requester.send(null);
	var json_text = requester.responseText;
	var data = json_parser(json_text);
	return data;
}
// \brief create requester for getting files
// \todo support old browser (ex: IE6, IE5)
function create_http_request() {
	var requester = null;
	// for modern browser
	if(window.XMLHttpRequest) {
		requester = new XMLHttpRequest();
	}
	return requester;
}
// \brief return true when posible JSON object
// refer to "http://stackoverflow.com/questions/1787020/json-object-in-ie6-how"
function enable_json() {
	if(!this.JSON) {
		return false;
	}
	return true;
}
// \brief translate JSON into Javascript object
// \param(json_data) JSON
// \ret 
function json_parser(json_data) {
	var data = new String();
	
	if(enable_json()) {
		data = JSON.parse(json_data);
	}
	else {
		// security warning because use eval function
		data = eval("(" + json_data + ")");
	}
	
	return data;
}


function createMoon(words){

    var spagh = document.createElement('div');
    spagh.setAttribute('class', 'moon p')
    spagh.textContent=words;

    return spagh;
}

function createNix(words){

    var spagh = document.createElement('div');
    spagh.setAttribute('class', 'nix p')
    spagh.textContent=words;

    return spagh;
}



const everyPlayer = document.createElement('img');
everyPlayer.src="playoffBasketball/everyplayer1.png";

mainContainer.appendChild(everyPlayer);

const bTxt = createMoon(".");
mainContainer.appendChild(bTxt);

const above33 = document.createElement('img');
above33.src="playoffBasketball/above33.png";

mainContainer.appendChild(above33);

const cTxt = createNix(".");
mainContainer.appendChild(cTxt);

const only6 = document.createElement('img');
only6.src="playoffBasketball/only6.png";

mainContainer.appendChild(only6);

const dTxt = createMoon(".");
mainContainer.appendChild(dTxt);

const playersAre = document.createElement('img');
playersAre.src="playoffBasketball/playersAre.png";

mainContainer.appendChild(playersAre);

const eTxt = createMoon(".");
mainContainer.appendChild(eTxt);

const mj1 = document.createElement('img');
mj1.src="playoffBasketball/mj1.png";

mainContainer.appendChild(mj1);

const fTxt = createNix(".");
mainContainer.appendChild(fTxt);

const mj2 = document.createElement('img');
mj2.src="playoffBasketball/mj2.png";

mainContainer.appendChild(mj2);

const gTxt = createMoon(".");
mainContainer.appendChild(gTxt);

const mj3 = document.createElement('img');
mj3.src="playoffBasketball/mj3.png";

mainContainer.appendChild(mj3);

const hTxt = createNix(".");
mainContainer.appendChild(hTxt);

const lbj = document.createElement('img');
lbj.src="playoffBasketball/lbj.png";

mainContainer.appendChild(lbj);

const iTxt = createMoon(".");
mainContainer.appendChild(iTxt);

const ai = document.createElement('img');
ai.src="playoffBasketball/ai.png";

mainContainer.appendChild(ai);


const mTxt = createMoon("hello.");
const nix = createNix("... h-hello?");
moon.appendChild(mTxt);
moon.appendChild(nix);


const mTxt1 = createMoon("how are you?");
const nix11 = createNix("good.");
const nix12 = createNix("i think?");
const nix13 = createNix("what is this?");
const nix14 = createNix("where are we?");
moon.appendChild(mTxt1);
moon.appendChild(nix11);
moon.appendChild(nix12);
moon.appendChild(nix13);
moon.appendChild(nix14);



const mTxt2 = createMoon("try not to worry about that right now. do you recognize me?");
const nix21 = createNix("why would i recogni-");
const nix22 = createNix("WAIT");
const nix23 = createNix("why do i recognize you???");
moon.appendChild(mTxt2);
moon.appendChild(nix21);
moon.appendChild(nix22);
moon.appendChild(nix23);

const mTxt31 = createMoon("like i said, try not to worry for now.");
const mTxt32 = createMoon("we can catch up later, but at the moment we kinda need to move");
const mTxt323 = createMoon("and you kinda aren't moving.");
moon.appendChild(mTxt31);
moon.appendChild(mTxt32);
moon.appendChild(mTxt323);


const graph = document.createElement('div');
graph.setAttribute('class', 'card');
graph.src="playoffsPLyrVTotPts.html";


mainContainer.appendChild(moon);
//mainContainer.appendChild(graph);

app.appendChild(mainContainer);


var stillTrying = get_json("https://raw.githubusercontent.com/nathanshulkin/storyTime/master/story.json");

const tar = createMoon(stillTrying['moon']);
app.appendChild(tar);
