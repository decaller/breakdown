//context menu to delete item - breakdown
var context_menu_breakdown = {
    view:"contextmenu",
    id:"contextmenu_breakdown",
    data:["Remove"],
    click:function(id){ 
        var context = this.$context;
        var item = $$('treetable_main_breakdown').getItem(context.id);
        webix.message(id+" on row "+item.br_item);
        if(id === "Remove" )
            context.obj.remove(context.id);
    }
};
    
//context menu to delete item - mtw  
var context_menu_mtw = {
    view:"contextmenu",
    id:"contextmenu_mtw",
    data:["Remove"],
    click:function(id){ 
        var context = this.$context;
        var item = $$('datatable_mtw_main_breakdown').getItem(context.id);
        webix.message(id+" on row "+item.mtw_item);
        if(id === "Remove" )
            context.obj.remove(context.id);
    }
};

//side menu     
var side_menu  = {
    view: "sidemenu",
    id: "menu_side",
    width: 200,
    position: "left",
    body:{

    view:"list",
    borderless:true,
    scroll: false,

    template: "<span class='webix_icon fa-#icon#'></span> #value#",
    data:[
        {id: 1, value: "Your Name", icon: "user"},
        {id: 2, value: "Home", icon: "home"},
        {id: 3, value: "Share", icon: "share-alt"},
        {id: 4, value: "Help", icon: "question-circle"},
        {id: 5, value: "Settings", icon: "cog"},
        {id: 6, value: "Sign Out", icon: "sign-out"}
    ],
    select:true,
    type:{
        height: 40
    }
    }
};
