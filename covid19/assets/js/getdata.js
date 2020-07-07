const total = document.querySelector(".add");
const totalcon = document.querySelector("#conf");
const active = document.querySelector("#act");
const death = document.querySelector("#dec");
const recovered = document.querySelector("#rec");

const GenerateDate = ()=>{
  
	const now = new Date();
	let year = dateFns.format(now,'YYYY');
	let month = dateFns.format(now,'MM');
	let day = dateFns.format(now,'DD');
	let date = year+"-"+month+"-"+day;
	return date;
}

//  const CountryList = async() =>{
 
// 	const url = "https://api.covid19api.com/countries";
// 	const responsecnt = await fetch(url);
// 	const datacnt = await responsecnt.json();
// 	return datacnt; 

// };

const GetDataByCountry = async()=>{
  

	// const url1 = "https://api.covid19api.com/countries";
	// const responsecnt = await fetch(url1);
	// const datacnt = await responsecnt.json();
	// console.log(datacnt[0]);
	// console.log(datacnt[1]);
	// console.log(datacnt[2]);
	// let size =  datacnt.length;
	
	//   datacnt.forEach(element => {
	// 	  console.log(element.Country.split(' ').join('-'));
	//   });
	const date = GenerateDate();
	   const url = "https://api.covid19india.org/data.json"//"https://api.covid19api.com/country/india?from=2020-03-01T00:00:00Z&to="+date+"T00:00:00Z";
	   const response = await fetch(url);
	   const data = await response.json();
	   const len=data.statewise.length;
       
	   const last= data[len-1];
	   //console.log(data.statewise);
	//    console.log(data.statewise[1].state);
	//    console.log(data.statewise[1].confirmed);
	//    console.log(data.statewise[1].deaths);
	   arr = data.statewise;
	  
	 
	   console.log(arr);



	
    //    arr.forEach((dat) => {
			
    //     console.log(dat.active);
	// 	let state = dat.state;
	// 	let confirmed = dat.confirmed;
	// 	let active = dat.active;
	// 	let deaths = dat.deaths;

	//     const html = `
	//               <div class="row">
	//               <div class="col-lg-3 col-md-3 col-sm-3" ${state}</div>
	//               <div class="col-lg-3 col-md-3 col-sm-3" ${confirmed}</div> 
	//               <div class="col-lg-3 col-md-3 col-sm-3" ${active}</div>
	//               <div class="col-lg-3 col-md-3 col-sm-3" ${deaths}</div>
	//     </div>`;
	//     total.innerHTML+=html ;


	//  });
	   totalcon.innerText = data.statewise[0].confirmed;
	   active.innerText = data.statewise[0].active; 
	   death.innerText = data.statewise[0].deaths; 
	   recovered.innerText =  data.statewise[0].recovered; 
	   for(let i=1;i<len;i++)
	   {
               
		   console.log(data.statewise[1].active);
		   let state = data.statewise[i].state;
		   let confirmed = data.statewise[i].confirmed;
		   let active = data.statewise[i].active;
		   let recovered = data.statewise[i].recovered;
		   let deaths = data.statewise[i].deaths;
		let html = `
					<section class="facts section-bg" data-aos="fade-up">
					<div class="container">
		            <div class="row counters horizontal">
					<div  class = "col-lg-3 col-md-3 col-sm-3 state" >
					    <span data-toggle="counter-up">${state}</span>
					</div>
					<div class="col-lg-2 col-md-2 col-sm-2 confirmed"  >
					   <span data-toggle="counter-up">${confirmed}</span>
					</div> 
					<div class="col-lg-2 col-md-2 col-sm-2 active" >
					   <span data-toggle="counter-up">${active}</span>
					</div>
					<div class="col-lg-2 col-md-2 col-sm-2 recovered" >
					   <span data-toggle="counter-up">${recovered}</span>
					</div>
					<div class="col-lg-2 col-md-2 col-sm-2 death">
					   <span data-toggle="counter-up">${deaths}</span>
					</div>
					</div>
					</div>
					</section>`;
		total.innerHTML+=html;

	   }
	//    }


	//    total.innerHTML=last.Confirmed;
	//    active.innerHTML=last.Active;
	//    recovered.innerHTML= last.Recovered;
	//  console.log(data);
	// data.statewise.forEach((element,index) => {

    //         console.log(element.statewise[index].state);

	// 	// const html = `
	// 	// <div class="col-lg-3 col-md-3 col-sm-3" ${element.statewise.state}</div>
	// 	// <div class="col-lg-3 col-md-3 col-sm-3" ${element.statewise.confirmed}</div> 
	// 	// <div class="col-lg-3 col-md-3 col-sm-3" ${element.statewise.active}</div>
	// 	// <div class="col-lg-3 col-md-3 col-sm-3" ${element.statewise.deaths}</div>
	// 	// `
	// 	// total.append(html);

	// });
	 
};
	
GetDataByCountry();	
	


//GenerateDate();
	// const GetDataByCountryTotal = async()=>{
	
	// 	const response1 = await fetch("https://api.covid19api.com/total/country/bihar/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z")
	// 	const data1= await response1.jeson();
	// 	console.log(1);
	// 	console.log(data1);
	// 