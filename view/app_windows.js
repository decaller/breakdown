//context menu to delete item - breakdown
var context_menu_breakdown = {
    view:"contextmenu",
    id:"contextmenu_breakdown",
    data:["Delete"],
    master: $$('treetable_main_breakdown'),
    on:{
        onItemClick:function(id){
        var context = this.getContext();
        var listId = context.id;
        webix.message($$("treetable_main_breakdown").getItem(listId).br_item + " deleted");
        $$("treetable_main_breakdown").remove(listId);
        }
    }
};
    
//context menu to delete item - mtw  
var context_menu_mtw = {
    view:"contextmenu",
    id:"contextmenu_mtw",
    data:["Delete"],
    master: $$('datatable_mtw_main_breakdown'),
    on:{
        onItemClick:function(id){
        var context = this.getContext();
        var listId = context.id;
        webix.message($$("datatable_mtw_main_breakdown").getItem(listId).mtw_item + " deleted");
        $$("datatable_mtw_main_breakdown").remove(listId);
        }
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