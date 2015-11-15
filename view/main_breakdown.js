var view_main_breakdown__project_breakdown =
{
  id : "project_breakdown",
  type : "line",
  borderless : true,
  rows : [
    {
      view : "toolbar" ,
      borderless : true,
   
      elements : [
        { view : "button", type : "iconButtonTop", icon : "navicon", width : 24, click:show_sidebar},
        { label : "Project's Breakdown", view : "label", width : 300 },
        { view : "spacer" },
        { view : "button", type : "iconButtonTop", icon : "plus", width : 24},
        { view : "button", type : "iconButtonTop", icon : "child", width : 24},
        { click : show_breakdown_cart, view : "button", type:"iconButtonTop", icon : "shopping-cart", width : 24},
        { click : search_breakdown, view : "button", type : "iconButtonTop", icon : "search", width : 24}
      ]
    }
    ,
    {
      columns : [
        {
          id : "br_item", header : "Item", 
          fillspace : 2.5,
          template : "{common.treetable()} #br_item#"
        },
        { id : "br_index", header : "Index" , fillspace : 0.7 },
        { id : "br_unit", header : "Unit", fillspace : 1},
        { id : "br_child_prc", header : "Child", fillspace : 1 },
        { id : "br_mtw_prc", header : "MTW", fillspace : 1 },
        { id : "br_total_prc", header : "Total", fillspace : 1.5 },
        { id : "br_menu", header : "", fillspace : 0.2  }
      ],
      view : "treetable",
      data :[
      {
          id:"root", open:true, br_item:"Jembatan Ancol", br_index:"1", br_unit: "buah", br_child_prc : "", br_mtw_prc : "", br_total_prc : "",
          dimension : [

          {dimension : "", index : "", unit : "", source : "" }

          ],
          mtw : [

          {SKU : "", item : "", index : "", unit_price : "", unit : "", total : "" }

          ],
          data : [
              {
                  id:"1", br_item:"Struktur", br_index:"1", br_unit: "paket", br_child_prc : "", br_mtw_prc : "", br_total_prc : "",
                  dimension : [

                  {dimension : "", index : "", unit : "", source : ""}

                  ],

                  mtw : [

                  {SKU : "", item : "", index : "", unit_price : "", unit : "", total : ""}

                  ],
                  data : [
                    {
                        id:"1.1", br_item:"Pondasi", br_index:"1", br_unit: "paket", br_child_prc : "", br_mtw_prc : "", br_total_prc : "",
                        dimension : [

                        {dimension : "", index : "", unit : "", source : ""}

                        ],
                        mtw : [

                        {SKU : "", item : "", index : "", unit_price : "", unit : "", total : ""}

                        ],
                        data : [

                             {
                                id:"1.1.1", br_item:"Pondasi Jenis 1", br_index:"1", br_unit: "paket", br_child_prc : "", br_mtw_prc : "", br_total_prc : "",
                                dimension : [

                                {dimension : "", index : "", unit : "", source : ""}

                                ],
                                mtw : [

                                {SKU : "", item : "", index : "", unit_price : "", unit : "", total : ""}

                                ],
                                data : [


                                ]

                                
                            },

                            {
                                id:"1.1.2", br_item:"Pondasi Jenis 2", br_index:"1", br_unit: "paket", br_child_prc : "", br_mtw_prc : "", br_total_prc : "",
                                dimension : [

                                {dimension : "", index : "", unit : "", source : ""}

                                ],
                                mtw : [

                                {SKU : "", item : "", index : "", unit_price : "", unit : "", total : ""}

                                ],
                                data : [


                                ]

                                
                            },

                            {
                                id:"1.1.3", br_item:"Pondasi Jenis 3", br_index:"1", br_unit: "paket", br_child_prc : "", br_mtw_prc : "", br_total_prc : "",
                                dimension : [

                                {dimension : "", index : "", unit : "", source : ""}

                                ],
                                mtw : [

                                {SKU : "", item : "", index : "", unit_price : "", unit : "", total : ""}

                                ],
                                data : [


                                ]

                                
                            },

                        ]

                        
                    },

                     {
                        id:"1.2", br_item:"Rangka Jembatan", br_index:"1", br_unit: "paket", br_child_prc : "", br_mtw_prc : "", br_total_prc : "",
                        dimension : [

                        {dimension : "", index : "", unit : "", source : ""}

                        ],
                        mtw : [

                        {SKU : "", item : "", index : "", unit_price : "", unit : "", total : ""}

                        ],
                        data : [
                            {
                                id:"1.2.1", br_item:"Bagian Barat", br_index:"1", br_unit: "paket", br_child_prc : "", br_mtw_prc : "", br_total_prc : "",
                                dimension : [

                                {dimension : "", index : "", unit : "", source : ""}

                                ],
                                mtw : [

                                {SKU : "", item : "", index : "", unit_price : "", unit : "", total : ""}

                                ],
                                data : [


                                ]

                                
                            },

                            {
                                id:"1.2.2", br_item:"Bagian Tengah", br_index:"1", br_unit: "paket", br_child_prc : "", br_mtw_prc : "", br_total_prc : "",
                                dimension : [

                                {dimension : "", index : "", unit : "", source : ""}

                                ],
                                mtw : [

                                {SKU : "", item : "", index : "", unit_price : "", unit : "", total : ""}

                                ],
                                data : [


                                ]

                                
                            },

                            {
                                id:"1.2.3", br_item:"Bagian Timur", br_index:"1", br_unit: "paket", br_child_prc : "", br_mtw_prc : "", br_total_prc : "",
                                dimension : [

                                {dimension : "", index : "", unit : "", source : ""}

                                ],
                                mtw : [

                                {SKU : "", item : "", index : "", unit_price : "", unit : "", total : ""}

                                ],
                                data : [


                                ]

                                
                            },


                        ]

                        
                    }


                  ]

                  
              },
              {
                  id:"2", br_item:"Jalan", br_index:"20", br_unit: "meter", br_child_prc : "", br_mtw_prc : "", br_total_prc : "",
                  dimension : [

                  {dimension : "", index : "", unit : "", source : ""}

                  ],
                  
                  mtw : [

                  {SKU : "", item : "", index : "", unit_price : "", unit : "", total : ""}

                  ],
                  data : [
                    {
                        id:"2.1", br_item:"Abutment", br_index:"2", br_unit: "paket", br_child_prc : "", br_mtw_prc : "", br_total_prc : "",
                        dimension : [

                        {dimension : "", index : "", unit : "", source : ""}

                        ],
                        mtw : [

                        {SKU : "", item : "", index : "", unit_price : "", unit : "", total : ""}

                        ],

                        data : [

                            {
                                id:"2.1.1", br_item:"Sub Base", br_index:"1", br_unit: "paket", br_child_prc : "", br_mtw_prc : "", br_total_prc : "",
                                dimension : [

                                {dimension : "", index : "", unit : "", source : ""}

                                ],
                                mtw : [

                                {SKU : "", item : "", index : "", unit_price : "", unit : "", total : ""}

                                ],
                                data : [


                                ]

                                
                            },

                            {
                                id:"2.1.2", br_item:"Base Course", br_index:"1", br_unit: "paket", br_child_prc : "", br_mtw_prc : "", br_total_prc : "",
                                dimension : [

                                {dimension : "", index : "", unit : "", source : ""}

                                ],
                                mtw : [

                                {SKU : "", item : "", index : "", unit_price : "", unit : "", total : ""}

                                ],
                                data : [


                                ]

                                
                            },

                            {
                                id:"2.1.3", br_item:"Slab", br_index:"1", br_unit: "paket", br_child_prc : "", br_mtw_prc : "", br_total_prc : "",
                                dimension : [

                                {dimension : "", index : "", unit : "", source : ""}

                                ],
                                mtw : [

                                {SKU : "", item : "", index : "", unit_price : "", unit : "", total : ""}

                                ],
                                data : [


                                ]

                                
                            },

                        ]

                        
                    },
                 

                    {
                        id:"2.2", br_item:"Di Atas Jembatan", br_index:"2", br_unit: "paket", br_child_prc : "", br_mtw_prc : "", br_total_prc : "",
                        dimension : [

                            {dimension : "", index : "", unit : "", source : ""}

                        ],
                        mtw : [

                            {SKU : "", item : "", index : "", unit_price : "", unit : "", total : ""}

                        ],
                        
                        data : [
                            {
                                id:"2.2.1", br_item:"Slab Beton", br_index:"1", br_unit: "paket", br_child_prc : "", br_mtw_prc : "", br_total_prc : "",
                                dimension : [

                                {dimension : "", index : "", unit : "", source : ""}

                                ],
                                mtw : [

                                {SKU : "", item : "", index : "", unit_price : "", unit : "", total : ""}

                                ],
                                data : [


                                ]

                                
                            },


                        ]

                        
                    }

                  ]

                  
              }

          ]

          
      }],

      borderless : true,
      
      editable : true,
      drag : true,
      on : {onBeforeDrop:function(context){context.parent = context.target; context.index = -1;}}
    }
  ]
};

var view_main_breakdown__breakdown_details =
{
  id : "breakdown_details",
  type : "line",
  rows : [
    {
      view : "toolbar", 
      borderless : true,
   
      elements : [
        { label : "Details", view : "label", width : 300 }

        
      ]

      

    },
    {
      view : "scrollview",
      scroll : "y",
      body : {
        rows : [
          { view:"textarea" , height:200, label:"Second note", labelPosition:"top" },
      
          {
            view : "carousel",
            css : "webix_dark",
            cols : [
              { view : "template", template : "View A" },
              { view : "template", template : "View B" }
            ],
            height : 200
          },
          {
            type : "line",
            rows : [
              {
                view : "toolbar",
                elements : [
                  { label : "Dimension", view : "label" },
                  { view : "button", type : "iconButton", icon : "plus", width : 28 }
                ]
              },
              {
                
                autoConfig : true,
                view : "datatable",
                navigation : false,
                height : 250,
                columns : [
                  { id : "dt_dimension", header : "Dimension", fillspace : 1.2},
                  { id : "dt_index", header : "Index", fillspace : 1},
                  { id : "dt_unit", header : "Unit", fillspace : 1},
                  { id : "dt_source", header : "Source", fillspace : 1.2},
                  { id : "dt_use", header : "Use", fillspace : 0.5 }
                ],
                drag : false
              }
            ]
          },
          {
            type : "line",
            rows : [
              {
                view : "toolbar",
                elements : [
                  { label : "Materials, Tools, Workers", view : "label" },
                  {
                    type : "iconButton",
                    icon : "shopping-cart",
                    width : 31,
                    view : "button",
                    click : show_mtw_cart
                  },
                  { click : show_mtw_search, view : "button", type : "iconButton", icon : "search", width : 28 }
                ]
              },
              {
                
                autoConfig : true,
                view : "datatable",
                height : 250,
                columns : [
                  { id : "mtw_sku", header : "SKU", fillspace : 1 },
                  { id : "mtw_item", header : "Item", fillspace :2 },
                  { id : "mtw_index", header : "Index", fillspace : 0.7 },
                  { id : "mtw_unit", header : "Unit", fillspace : 1 },
                  { id : "mtw_unitprice", header : "Unit Price", fillspace : 1.5 },
                  { id : "mtw_totalprice", header : "Total Price", fillspace : 1.8 }
                ],
                drag : true
              }
            ]
          }
        ]
      }
    }
  ]
};

var view_main_breakdown__breakdown_cart =
{
  id : "breakdown_cart",
  type : "line",
  rows : [
    {
      view : "toolbar",
      borderless : true,
      elements : [
             
        { click : back_to_details, view : "button", type : "iconButtonTop", icon : "arrow-left", width : 24 },
        { label : "Breakdown's Cart", view : "label" }

      ]
    },
    {
      
      columns : [
        {
          id : "cart_item",
          header : "Item",
          fillspace : 2.5,
          template : "{common.treetable()} #value#"
        },
        { id : "cart_index", header : "Index", fillspace : 0.7 },
        { id : "cart_unit", header : "Unit", fillspace : 1 },
        { id : "cart_child", header : "Child", fillspace : 1 },
        { id : "cart_mtw", header : "MTW", fillspace : 1 },
        { id : "cart_total", header : "Total Price", fillspace : 1.5 },
        { id : "cart_menu", header : "", fillspace : 0.2 }
      ],
      view : "treetable",
      drag : true
    }
  ],
  borderless : false,
  hidden : true
 
};

var view_main_breakdown__mtw_cart =
{
  id : "mtw_cart",
  type : "line",
  rows : [
    {
      view : "toolbar",
      borderless : true,
      elements : [
        { click : back_to_project_breakdown, view : "button", type : "iconButton", icon : "arrow-left", width : 28 },      
        { label : "Item's Cart", view : "label" }
      ]
    },
    {
      
      autoConfig : true,
      view : "datatable",
      borderless : true,
      
      columns : [
        { id : "mc_sku", header : "SKU", fillspace : 1 },
        { id : "mc_item", header : "Item", fillspace : 2 },
        { id : "mc_index", header : "Index", fillspace : 0.7 },
        { id : "mc_unit", header : "Unit", fillspace : 1 },
        { id : "mc_unitprice", header : "Unit Price", fillspace : 1.5 },
        { id : "mc_totalprice", header : "Total Price", fillspace : 1.8 }
      ],
      drag : true
    }
  ]
  
};
