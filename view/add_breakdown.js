var view_add_breakdown__search = 
{
  id : "breakdown_search",
  type : "line",
  rows : [
    {
      view : "toolbar",
      elements : [
        { id : "searchbar_br_search",label : "Search", view : "search" , color : "white", tooltip: "Type to Search Breakdown Item"},
        { view : "button", click:show_mtw_search,  type : "iconButtonTop", icon : "leaf", width : 35, tooltip: "Switch to Search MTW"},
      ]
    },
    {
      columns : [
        { id : "br_item", header : "Item", fillspace : 3, template : "{common.treetable()} #br_item#", editor : "text", sort:"string"},
        { id : "br_index", header : "Index" , fillspace : 1 , editor : "text", sort:"int"},
        { id : "br_unit", header : "Unit", fillspace : 0.8, editor : "text"},
        { id : "br_child_prc", header : "ChildPrice", fillspace : 1.5, template: childTotal_search, sort:"int"},
        { id : "br_mtw_prc", header : "MTWPrice", fillspace : 1.5, template: sumTotal_search, sort:"int"},
        { id : "br_total_prc", header : "Total", fillspace : 1.5, template: priceTotal_search, sort:"int"}
      ],
      view : "treetable",
      id : "treetable_search_breakdown",
      data : search_breakdown_treetable_data,
      select : "row",
      resizeColumn : true,
      borderless : true,
      math : true,
      drag : true,
      hover: "rowHover",
      tooltip:{ 
        template: "<span class='webix_strong'>Item: </span> #br_item#<br/><span class='webix_strong'>Index: </span> #br_index#</br><span class='webix_strong'>Unit: </span> #br_unit#</br>"
      },
      on: {
        onBeforeDragIn:function(context){
          //do not recieve any drop
          return false;
        },
        onBeforeSelect:function(context){
          //clear selection from main if selected
          $$("treetable_main_breakdown").clearSelection();
          
          //set property sheet and mtw table to non-editable
          $$("item_properties").config.editable = false;
          $$("datatable_mtw_main_breakdown").config.editable = false;
          
          //refresh mtw table
          $$("datatable_mtw_main_breakdown").refresh();
          
        },
        
      }
      }
  ]
  
};
