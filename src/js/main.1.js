document.addEventListener("DOMContentLoaded", () => {
	//Let's get rid of jQuery :)
	let Model = function () {
		this.menuHeight = 78;
		//offset constants
		this.timeout = 300;
		//store scroll values
		this.bodyScroll = 0;
		this.elScroll = 0;

		this.mobileMenuVisible = false;

		this.CONTENT_OFFSET = document.querySelector('.content').offsetTop - this.menuHeight;
		this.ABOUT_OFFSET = document.querySelector('#about').offsetTop - this.menuHeight;
		this.SKILLS_OFFSET = document.querySelector('#skills').offsetTop - this.menuHeight;
		this.PROJECTS_OFFSET = document.querySelector('#projects').offsetTop - this.menuHeight;
		this.CONTACT_OFFSET = document.querySelector('#contact').offsetTop - this.menuHeight;
		this.CV_OFFSET = document.querySelector('.resume').offsetTop - this.menuHeight;
		this.HOME_OFFSET = document.querySelector('#home').offsetTop - this.menuHeight;
	}

	let View = function (model) {

		//selectors
		this.NAV_LIST = document.querySelector(".nav-list")
		this.NAV = document.querySelector("nav")
		this.NAV_LINKS = document.querySelectorAll(".link")
		this.CV_LINK = document.querySelector(".cv-download");
		this.ARROW = document.querySelector(".arrow");
		this.HERO = document.querySelector('section.hero')
		this.MENU_TOGGLE = document.querySelector('#menu-toggle')
		this.PROJECTS = document.querySelectorAll('#projects .item .overlay')
		this.READ_MORE_BTNS = document.querySelectorAll(".item__read-more");
		
		this.MODALS = document.querySelectorAll('.modal')

		this.addActive = (element) => {
			element.classList.add('active')
		}

		//add shrinking class to nav after scroll
		this.alterNavStyle = () => {
			(window.scrollY > 50 || model.elScroll > 50) ?
				view.NAV.classList.add("nav-small")
				:
				view.NAV.classList.remove("nav-small") 
		}

		this.toggleMenu = () => {
			if (document.body.classList.contains('small-screen')) {
				this.NAV_LIST.style.display === "none" ? this.NAV_LIST.style.display = 'block' : this.NAV_LIST.style.display ='none';
			}
		}

		this.animateIn = (element) => {
			element.classList.add('visible', 'animateIn');
			setTimeout(() => {
				element.classList.remove('animateIn')
			}, model.timeout);
		}
		this.animateOut = (element) => {
			element.classList.add('animateOut');
			setTimeout(() => {
				element.classList.remove('animateOut', 'visible')
			}, model.timeout);
		}
	}

	let Controller = function (model, view) {
		this.init = () => {
		// everything that needs to be done right after page loads
			this.screenClass(); //check screen size
			view.alterNavStyle(); //match nav's styling to scroll position
			//event listeners
			window.addEventListener('resize', this.screenClass);
			document.addEventListener('scroll', this.scrollHandler);
			document.querySelectorAll('.close').forEach(el => el.addEventListener('click', this.closeModal))
			view.NAV_LINKS.forEach( el => el.addEventListener( 'click', (e)=>this.navLinksHandler(e) ) )
			view.MENU_TOGGLE.addEventListener('click', view.toggleMenu);
			view.READ_MORE_BTNS.forEach(el => el.addEventListener('click', (e) => this.chooseProject(e)))


			//
			view.ARROW.addEventListener('click', () => {
				window.scrollTo({
					top:
						view.HERO.offsetTop + view.HERO.offsetHeight - model.menuHeight,
					left: 0,
					behavior: "smooth"
				});
			});

			//typed.js init
			var typed = new Typed(document.querySelector(".text"), {
				strings: [
					"hire(developer)<span class='white'>;</span>^1000",
					"let <span class='violet'>developer</span> =  <span class='white'>\u007B^400 </span>\n <span class='violet'>  firstName</span><span class='white'>:</span> <span class='green'>'Rafał'</span><span class='white'>,</span> \n <span class='violet'>  lastName</span><span class='white'>:</span> <span class='green'>'Skwara'</span><span class='white'>,</span> \n <span class='violet'>  skills</span><span class='white'>: {</span> \n   <span class='violet'>  HTML5</span><span class='white'>:</span> true<span class='white'>,</span> \n   <span class='violet'>  CSS3</span><span class='white'>:</span> true<span class='white'>,</span> \n   <span class='violet'>  JavaScript</span><span class='white'>:</span><span class='green'> 'good'</span><span class='white'>,</span> \n   <span class='violet'>  jQuery</span><span class='white'>:</span> true<span class='white'> \n   \u007D,</span> \n <span class='violet'>  tools</span><span class='white'>: {</span> \n   <span class='violet'>  git</span><span class='white'>:</span> true<span class='white'>,</span> \n   <span class='violet'>  gulp</span><span class='white'>:</span> true<span class='white'>,</span> \n   <span class='violet'>  sass</span><span class='white'>:</span> true<span class='white'>,</span> \n   <span class='violet'>  pugJade</span><span class='white'>:</span> true \n <span class='white'>  \u007D \n \u007D</span>  ",
				],
				typeSpeed: 5
			});

		}

		this.navLinksHandler = (e) => {
			e.preventDefault();
			const id = e.target.id.slice(5);
			const matchingSection = document.querySelector(`#${id}`)
			
			window.scroll({
				left: 0,
				top: matchingSection.offsetTop - model.menuHeight,
				behavior: "smooth"
			});
		}

		this.scrollHandler = () => {
			model.bodyScroll = document.body.scrollTop;
			model.elScroll = document.documentElement.scrollTop;
			if (document.body.classList.contains('small-screen')) {
				view.NAV_LIST.style.display = 'none';
			}
			view.alterNavStyle()
			// scrollspy logic
			// for nav links
			if (model.bodyScroll > model.CONTENT_OFFSET || model.elScroll >= model.CONTENT_OFFSET) {
				document.querySelectorAll("nav ul li").forEach(el => el.classList.remove("active"));

				if (model.elScroll > model.CONTACT_OFFSET-model.menuHeight) {
					view.addActive(document.querySelector("#link-contact").parentNode);
				} else if (model.elScroll > model.PROJECTS_OFFSET-model.menuHeight) {				
					view.addActive(document.querySelector("#link-projects").parentNode);
				} else if (model.elScroll > model.SKILLS_OFFSET-model.menuHeight) {		
					view.addActive(document.querySelector("#link-skills").parentNode);
				} else if (model.elScroll > model.ABOUT_OFFSET-model.menuHeight) {	
					view.addActive(document.querySelector("#link-about").parentNode);
				} //end inner if else
			} else {
				document.querySelectorAll("nav ul li").forEach(el => el.classList.remove("active"));
				document.querySelector("#link-home").parentNode.classList.add("active");
			}//end outer if

			if (model.elScroll > 50) {				
				view.CV_LINK.style.display = 'block';
				view.CV_LINK.style.opacity = 1;
			} else {
				view.CV_LINK.style.opacity = 0;
				setTimeout(() => {
					view.CV_LINK.style.display = "none";
				}, 400);
			}
		}

		this.chooseProject = (e) => {
			const target = e.target;
			const modalName = target.dataset.js;
			view.MODALS.forEach (el => {
				el.classList.remove('visible')
				el.classList.contains(`${modalName}-modal`) ? view.animateIn(el) : null;
			})
			
		}

		this.closeModal = () => {
			view.MODALS.forEach(el => {
				view.animateOut(el)
			})
		}

		this.screenClass = () => {
			// manipulate body classes based on window size			
			if (window.innerWidth > 959) {
				document.body.classList.add('big-screen');
				document.body.classList.remove('small-screen');
				view.NAV_LIST.style.display =  'flex';
			} else {
				document.body.classList.remove("big-screen");
				document.body.classList.add("small-screen");
				view.NAV_LIST.style.display = 'none';
			}
		}
	}


	let model = new Model();
	let view = new View(model);
	let controller = new Controller(model, view);

	controller.init()
});