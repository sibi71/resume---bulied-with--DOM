const root=document.getElementById("root");
// main div

const div = document.createElement("div");

div.setAttribute("class","container");

// profile

const profile =document.createElement("div");

profile.setAttribute("class","profile");

const profile_icon = document.createElement("i");

profile_icon .classList.add("fa-solid" ,"fa-user","picon");

const profile_title=document.createElement("h1");

profile_title.innerText="Profile";

const profile_con=document.createElement("p");

profile_con.innerHTML="<li>A Hardworking and Responsible individual seeking development both for myself and organization.</li>"





// skills

const skills=document.createElement("div");

skills.setAttribute("class","skills");

const sicon = document.createElement("i");


sicon.classList.add ("fa-solid","fa-flask","sicon");

const skills_title = document.createElement("h1");

skills_title.innerText="Skills";

const skills_con = document.createElement("p");

const skills_con_title_1 =document.createElement("h4");

skills_con_title_1.innerText="Techanical skills";

const skills_js =document.createElement("label");

skills_js.innerHTML="Javascript ";

const skills_js_input =document.createElement("input");

skills_js_input.type="range";

const skills_html =document.createElement("label");

skills_html.innerHTML="HTML ";

const skills_html_input =document.createElement("input");

skills_html_input.type="range";

const skills_css=document.createElement("label");

skills_css.innerHTML="Css ";

const skills_css_input =document.createElement("input");

skills_css_input.type="range";

const skills_react =document.createElement("label");

skills_react.innerHTML="reactjs";

const skills_react_input =document.createElement("input");

skills_react_input.type="range";

const skills_nodejs =document.createElement("label");

skills_nodejs.innerHTML="Nodejs ";

const skills_nodejs_input =document.createElement("input");

skills_nodejs_input.type="range";

const skills_con_title_2 =document.createElement("h4");

skills_con_title_2.innerText="Additional skills";


const skills_project=document.createElement("label");

skills_project.innerHTML="Project Management ";

const skills_project_input =document.createElement("input");

skills_project_input.type="range";

const skills_res =document.createElement("label");

skills_res.innerHTML="Recuitment";

const skills_res_input =document.createElement("input");

skills_res_input.type="range";




// work

const work = document.createElement("div");

work.setAttribute("class","work");

const wicon =document.createElement("i");

wicon.classList.add("fa-solid", "fa-briefcase","wicon");

const work_title =document.createElement("h1");

work_title.innerText="Work experience";

const work_con = document.createElement("p");

work_con.innerHTML="<li>The section will ask you to specify all schools attended, along with diplomas, certificates and degrees you earned. Sometimes there ...</li><li>The  section will ask you to specify all schools attended, along with diplomas, certificates and degrees you earned. Sometimes there ...</li><li>The section will ask you to specify all schools attended, along with diplomas, certificates and degrees you earned. Sometimes there ...</li><li>The  section will ask you to specify all schools attended, along with diplomas, certificates and degrees you earned. Sometimes there ...</li>";


// education


const edu =document.createElement("div");

edu.setAttribute("class","edu");

const eicon = document.createElement ("i") ;

eicon.classList.add("fa-solid","fa-user-graduate","eicon");

edu_title =document.createElement("h1");

edu_title.innerText="Education";

const  edu_con = document.createElement("p");

edu_con.innerHTML="<li>The section will ask you to specify all schools attended, along with diplomas, certificates and degrees you earned. Sometimes there ...</li><li>The  section will ask you to specify all schools attended, along with diplomas, certificates and degrees you earned. Sometimes there ...</li><li>The section will ask you to specify all schools attended, along with diplomas, certificates and degrees you earned. Sometimes there ...</li><li>The  section will ask you to specify all schools attended, along with diplomas, certificates and degrees you earned. Sometimes there ...</li>";



// myimage

const imgcontainer = document.createElement("div");

imgcontainer.setAttribute("class","imgcontainer");

const myimg = document.createElement("img");

myimg.setAttribute("src","myprofile.jpg");

const myname = document.createElement("h1");

myname.innerText="Arunsibi";

const address = document.createElement("p");

address.innerText="Trichy | Moblie No:7904613995 | Email:thearunsibi@gmail.com";








// only for append area
// main
root.append(div);
// myimage
div.append(imgcontainer);
imgcontainer.append(myimg);
imgcontainer.append(myname);
imgcontainer.append(address);


// profile
div.append(profile);
profile_title.append(profile_icon);
profile.append(profile_title);
profile.append(profile_con);
// skills
div.append(skills);
skills.append(skills_title);
skills_title.append(sicon);
skills.append(skills_con);
skills.append(skills_con_title_1);
skills.append(skills_js);
skills_js.append(skills_js_input);
skills.append(skills_html);
skills_html.append(skills_html_input);
skills.append(skills_css);
skills_css.append(skills_css_input);
skills.append(skills_react);
skills_react.append(skills_react_input);
skills.append(skills_nodejs);
skills_nodejs.append(skills_nodejs_input);
skills.append(skills_con_title_2);

skills.append(skills_project);
skills_project.append(skills_project_input);
skills.append(skills_res);
skills_res.append(skills_res_input);

// work
div.append(work);
work.append(work_title);
work_title.append(wicon);
work.append(work_con);
// education
div.append(edu);
edu.append(edu_title);
edu_title.append(eicon);
edu.append(edu_con);





















