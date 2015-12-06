var view_add_breakdown__search = 
{
  
  type : "line",
  rows : [
    {
      view : "toolbar",
      elements : [
        { click : back_to_main, view : "button", type : "iconButtonTop", icon : "arrow-left", width : 35 },
        { id : "searchbar_br_search",label : "Search", view : "search" , color : "white"}
      ]
    },
    {
      columns : [
        { id : "br_item", header : "Item", fillspace : 3, template : "{common.treetable()} #br_item#", editor : "text"},
        { id : "br_index", header : "Index" , fillspace : 1 , editor : "text"},
        { id : "br_unit", header : "Unit", fillspace : 0.8, editor : "text"},
        { id : "br_child_prc", header : "ChildPrice", fillspace : 1.5, template: childTotal_search},
        { id : "br_mtw_prc", header : "MTWPrice", fillspace : 1.5, template: sumTotal_search},
        { id : "br_total_prc", header : "Total", fillspace : 1.5, template: priceTotal_search},
        { id : "br_copy",  header : "", fillspace : 0.8, template:"<span class='webix_icon fa-plus add_breakdown'></span>" }
      ],
      view : "treetable",
      id : "treetable_search_breakdown",
      data : search_breakdown_treetable_data,
      select : "row",
      resizeColumn : true,
      borderless : true,
      math : true
      }
  ]
  
};

var view_add_breakdown__search_details = 
{
  type : "line",
  rows : [
    { 
      view : "toolbar",
      borderless : true,
      elements : [
        { label : "Breakdown Item's Detail", view : "label", width : 300  }
      ]
    },
    {
      view : "scrollview",
      scroll : "y",
      body : {
        rows : [
         {view:"text", value:"" , readonly: true},
          {
          cols : [
            
              { view:"textarea" , gravity:5 , readonly: true},
        
              {
                view : "carousel",
                css : "webix_dark",
               
                gravity:5,
                cols : [
                  { view : "template", template : "View A" },
                  { view : "template", template : "View B" }
                ]
                
              }
            ],
          height : 200
            
          },
          {view:"resizer"},
          {
            type : "line",
            rows : [
              {
                view : "toolbar",
                elements : [
                  { label : "Items", view : "label" },
                  
                ]
              },
              {
                
                autoConfig : true,
                view : "datatable",
                minHeight : 300,
                id : "datatable_mtw_search_breakdown",
                math: true,
                select:"row",
                footer:true,
                columns : [
                  {id : "mtw_sku", header : "SKU", fillspace : 1 },
                  {id : "mtw_item", header : "Item", fillspace :2 },
                  {id : "mtw_index", header : "Index", fillspace : 1 },
                  {id : "mtw_unit", header : "Unit", fillspace : 1 },
                  {id : "mtw_unitprice", format : webix.i18n.priceFormat, header : "Price", fillspace : 1.5, footer:"Total" },
                  {id : "mtw_totalprice", format : webix.i18n.priceFormat, header : "Total", fillspace : 1.5,  math : "[$r,mtw_index] * [$r,mtw_unitprice]", footer:{content:"summColumn"}}
                ]
                
              }
            ]
          }
        ]
      }
    }
  ]
};