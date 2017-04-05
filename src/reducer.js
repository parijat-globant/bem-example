
export default function(state= {},action){
			console.log(action.name);
			switch(action.type){
				case 'MAKE_MENU' :
				var newMenu=[];
				state.menuItems.map( function (menu){
				if(menu.name === action.name){
					menu.isSelected = true ;
				} else if (menu.isSelected) {
					menu.isSelected = false;
				}
				newMenu.push(menu);
			});
	return  Object.assign({},{isMenuItem :state.isMenuItem},{menuItems : newMenu});


		default : return Object.assign({},state,{isMenuItem :true},{
		menuItems : [
			{
				"name" : "Home",
				"isSelected" : true
			},
			{
				"name" : "About Us",
				"isSelected" : false
			},
			{
				"name" : " Clients",
				"isSelected" : false
			},
			{
				"name" : " Contact",
				"isSelected" : false
			}

		]
	});
	}
}
