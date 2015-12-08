var view_add_breakdown__search = 
{
  id : "breakdown_search",
  type : "line",
  rows : [
    {
      view : "toolbar",
      elements : [
        { id : "searchbar_br_search",label : "Search", view : "search" , color : "white"},
        { view : "button", click:show_mtw_search,  type : "iconButtonTop", icon : "leaf", width : 35},
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
      on: {
        onBeforeDragIn:function(context){
          //do not recieve any drop
          return false;
        },
        onBeforeSelect:function(context){
          //clear selection form main if selected
          $$("treetable_main_breakdown").clearSelection();
        },
      }
      }
  ]
  
};
