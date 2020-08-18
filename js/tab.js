//accessing necessary elements
const btns=document.querySelectorAll(".tab-btn");
const wrapper=document.querySelector(".wrapper");
const content=document.querySelectorAll(".content");


wrapper.addEventListener('click',function(e) {
	const id=e.target.dataset.id;
	if(id) {
		//remove active from all the btns
		btns.forEach(function(btn) {
			btn.classList.remove('active');
			e.target.classList.add('active');
		});
		//remove active from all the content
		content.forEach(function(content){			
			content.classList.remove('active');
		});
		//to show the proper content after clicking on proper tab
		const el=document.getElementById(id);
		el.classList.add('active');
	}	
});






