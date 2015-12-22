var view_add_mtw__search = 
{
  id:"mtw_search",
  type : "line",
  rows : [
    {
      view : "toolbar",
      borderless : true,
      elements : [
        { label : "Search", view : "search", id:"searchbar_mtw_search", color : "white", tooltip : "Type to Search MTW"},
        { view : "button", click:show_breakdown_search,  type : "iconButtonTop", icon : "tree", width : 35, tooltip : "Switch to Search Breakdown Item"},
        { view : "button", align:"left",  type : "iconButtonTop", icon : "times", width : 35, tooltip: "Close", click:close_search},
      ]
    },
    {
      select:"row",
      id : "datatable_search_mtw",
      view : "datatable",
      data : search_mtw_data,
      drag: true,
      tooltip : {
        template: "<span class='webix_strong'>Item: </span> #mtw_item#<br/><span class='webix_strong'>Unit: </span> #mtw_unit#</br><span class='webix_strong'>Unit Price: </span> #mtw_unitprice#</br></br></br><b>**Drag and Drop Item to Add to Details**</b>"},
      hover : "rowHover",
      columns : [
        
        { id : "mtw_item", header : "Item", fillspace :2 , sort:"string"},
        { id : "mtw_unit", header : "Unit", fillspace : 1 },
        { id : "mtw_unitprice", header : "Unit Price", fillspace : 1.5 , sort:"int", format: webix.i18n.priceFormat}        
      ],
      on: {
        onBeforeDragIn:function(context){
          // do not recieve any drop
          return false;
        },
      }
    }
  ]
};
