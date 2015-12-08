var view_add_mtw__search = 
{
  id:"mtw_search",
  type : "line",
  rows : [
    {
      view : "toolbar",
      borderless : true,
      elements : [
        { label : "Search", view : "search" , color : "white", tooltip : "Type to Search MTW"},
        { view : "button", click:show_breakdown_search,  type : "iconButtonTop", icon : "tree", width : 35, tooltip : "Switch to Search Breakdown Item"},
      ]
    },
    {
      select:"row",
      id : "datatable_search_mtw",
      view : "datatable",
      data : search_mtw_data,
      drag:true,
      columns : [
        { id : "mtw_sku", header : "SKU", fillspace : 1, sort:"int" },
        { id : "mtw_item", header : "Item", fillspace :2 , sort:"string"},
        { id : "mtw_unit", header : "Unit", fillspace : 1 },
        { id : "mtw_unitprice", header : "Unit Price", fillspace : 1.5 , sort:"int"}         
      ],
      on: {
        onBeforeDragIn:function(context){
          return false;
        },
      }
    }
  ]
};
