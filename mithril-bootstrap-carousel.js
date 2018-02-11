var m = require("mithril");

module.exports = {
	view: (vnode)=>{
		return m( "#carousel.carousel.slide", {"data-ride": "carousel"}, 
			vnode.attrs.indicator ? m("ol.carousel-indicators", 
				vnode.attrs.images.map( (z,i)=>m("li[data-target='#carousel']", {className: i==0 ? "active":"", "data-slide-to": i} ) )
			) : null, 
			m(".carousel-inner", {"role": "listbox"} , 
				vnode.attrs.images.map( (z,i)=>m(".item", {className: i==0 ? "active":""}, 
					m("img", {src: z.path} ), 
					z.caption !== undefined ? m(".carousel-caption", m("h4", z.caption) ) : null
				) )
			), 
			vnode.attrs.control ? [
			m("a.left.carousel-control[href='#carousel'][role='button'][data-slide='prev']", 
				m("span.glyphicon.glyphicon-chevron-left"), 
				m("span", "Previous")
			), 
			m("a.right.carousel-control[href='#carousel'][role='button'][data-slide='next']", 
				m("span.glyphicon.glyphicon-chevron-right"), 
				m("span", "Next")
			)] : null
		) 
	}
}