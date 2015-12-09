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
        { id: 1,  icon : "file-excel-o", value: "Export TreeTable"},
        { id: 2, value: "Export All", icon: "file-excel-o"},
   
    ],
    select:true,
    type:{
        height: 40
    },
    on: {
        onItemClick:function(id){
						webix.message("Click: "+this.getItem(id).value);
                        if(this.getItem(id).id==1){
                             webix.toExcel("treetable_main_breakdown", {
                                columns:{
                                    "br_item": {header: "Item", width: 200, template: webix.template("#br_item#"), exportAsTree:true},
                                    "br_index": true,
                                    "br_unit": true,
                                    "br_child_prc": true,
                                    "br_mtw_prc": true,
                                    "br_total_prc": true
                                }}
                            )
                            
                        };
                            if(this.getItem(id).id==2){
                            window.export()
                            
                        }
                        
                        
					}
    }
    }
};