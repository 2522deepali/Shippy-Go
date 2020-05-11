$(document).ready(function () {
  // $.get('http://3.7.46.21/shipygo/items/homepage/1?access_token=hewhomustnotbenamed', function (data) {
  $.ajax({url: 'http://3.7.46.21/shipygo/items/homepage/1?access_token=hewhomustnotbenamed', success: function(data){
    var source   = $("#banner").html();
    var compiled = dust.compile(source, "banner");
    dust.loadSource(compiled);
    dust.render("banner", data.data, function(err, out) {
        $("#banner").html(out);    
    });
    var source   = $("#section2_heading").html();
    var compiled = dust.compile(source, "section2_heading");
    dust.loadSource(compiled);
    dust.render("section2_heading", data.data, function(err, out) {
        $("#section2_heading").html(out);    
    });
    var source   = $("#section2_content").html();
    var compiled = dust.compile(source, "section2_content");
    dust.loadSource(compiled);
    dust.render("section2_content", data.data, function(err, out) {
        $("#section2_content").html(out);    
    });
    var source   = $("#section2_subheading").html();
    var compiled = dust.compile(source, "section2_subheading");
    dust.loadSource(compiled);
    dust.render("section2_subheading", data.data, function(err, out) {
        $("#section2_subheading").html(out);    
    });
    var source   = $("#section2_subheading_content").html();
    var compiled = dust.compile(source, "section2_subheading_content");
    dust.loadSource(compiled);
    dust.render("section2_subheading_content", data.data, function(err, out) {
        $("#section2_subheading_content").html(out);    
    });
    var source   = $("#card1_heading").html();
    var compiled = dust.compile(source, "card1_heading");
    dust.loadSource(compiled);
    dust.render("card1_heading", data.data, function(err, out) {
        $("#card1_heading").html(out);    
    });
    var source   = $("#card1_subheading").html();
    var compiled = dust.compile(source, "card1_subheading");
    dust.loadSource(compiled);
    dust.render("card1_subheadingt", data.data, function(err, out) {
        $("#card1_subheading").html(out);    
    });
    var source   = $("#card2_heading").html();
    var compiled = dust.compile(source, "card2_heading");
    dust.loadSource(compiled);
    dust.render("card2_heading", data.data, function(err, out) {
        $("#card2_heading").html(out);    
    });
    var source   = $("#card2_subheading").html();
    var compiled = dust.compile(source, "card2_subheading");
    dust.loadSource(compiled);
    dust.render("card2_subheading", data.data, function(err, out) {
        $("#card2_subheading").html(out);    
    });
    var source   = $("#card3_heading").html();
    var compiled = dust.compile(source, "card3_heading");
    dust.loadSource(compiled);
    dust.render("card3_heading", data.data, function(err, out) {
        $("#card3_heading").html(out);    
    });
    var source   = $("#card3_subheading").html();
    var compiled = dust.compile(source, "card3_subheading");
    dust.loadSource(compiled);
    dust.render("card3_subheading", data.data, function(err, out) {
        $("#card3_subheading").html(out);    
    });
    var source   = $("#card4_heading").html();
    var compiled = dust.compile(source, "card4_heading");
    dust.loadSource(compiled);
    dust.render("card4_heading", data.data, function(err, out) {
        $("#card4_heading").html(out);    
    });
    var source   = $("#card4_subheading").html();
    var compiled = dust.compile(source, "card4_subheading");
    dust.loadSource(compiled);
    dust.render("card4_subheading", data.data, function(err, out) {
        $("#card4_subheading").html(out);    
    });
    var source   = $("#section3_heading").html();
    var compiled = dust.compile(source, "section3_heading");
    dust.loadSource(compiled);
    dust.render("section3_heading", data.data, function(err, out) {
        $("#section3_heading").html(out);    
    });
    var source   = $("#section3_content").html();
    var compiled = dust.compile(source, "section3_content");
    dust.loadSource(compiled);
    dust.render("section3_content", data.data, function(err, out) {
        $("#section3_content").html(out);    
    });
    var source   = $("#section3_text").html();
    var compiled = dust.compile(source, "section3_text");
    dust.loadSource(compiled);
    dust.render("section3_text", data.data, function(err, out) {
        $("#section3_text").html(out);    
    });
    var source   = $("#section4_img_heading").html();
    var compiled = dust.compile(source, "section4_img_heading");
    dust.loadSource(compiled);
    dust.render("section4_img_heading", data.data, function(err, out) {
        $("#section4_img_heading").html(out);    
    });
    var source   = $("#section4_img_subheading").html();
    var compiled = dust.compile(source, "section4_img_subheading");
    dust.loadSource(compiled);
    dust.render("section4_img_subheading", data.data, function(err, out) {
        $("#section4_img_subheading").html(out);    
    });
    var source   = $("#section5_heading").html();
    var compiled = dust.compile(source, "section5_heading");
    dust.loadSource(compiled);
    dust.render("section5_heading", data.data, function(err, out) {
        $("#section5_heading").html(out);    
    });
    var source   = $("#section5_content").html();
    var compiled = dust.compile(source, "section5_content");
    dust.loadSource(compiled);
    dust.render("section5_content", data.data, function(err, out) {
        $("#section5_content").html(out);    
    });
    var source   = $("#section5_subheading1").html();
    var compiled = dust.compile(source, "section5_subheading1");
    dust.loadSource(compiled);
    dust.render("section5_subheading1", data.data, function(err, out) {
        $("#section5_subheading1").html(out);    
    });
    var source   = $("#section5_sub1_li").html();
    var compiled = dust.compile(source, "section5_sub1_li");
    dust.loadSource(compiled);
    dust.render("section5_sub1_li", data.data, function(err, out) {
        $("#section5_sub1_li").html(out);    
    });
    var source   = $("#section5_sub1_li2").html();
    var compiled = dust.compile(source, "section5_sub1_li2");
    dust.loadSource(compiled);
    dust.render("section5_sub1_li2", data.data, function(err, out) {
        $("#section5_sub1_li2").html(out);    
    });
    var source   = $("#section5_sub1_li3").html();
    var compiled = dust.compile(source, "section5_sub1_li3");
    dust.loadSource(compiled);
    dust.render("section5_sub1_li3", data.data, function(err, out) {
        $("#section5_sub1_li3").html(out);    
    });
    var source   = $("#section5_subheading2").html();
    var compiled = dust.compile(source, "section5_subheading2");
    dust.loadSource(compiled);
    dust.render("section5_subheading2", data.data, function(err, out) {
        $("#section5_subheading2").html(out);    
    });
    var source   = $("#section5_sub2_li1").html();
    var compiled = dust.compile(source, "section5_sub2_li1");
    dust.loadSource(compiled);
    dust.render("section5_sub2_li1", data.data, function(err, out) {
        $("#section5_sub2_li1").html(out);    
    });
    var source   = $("#section5_sub2_li2").html();
    var compiled = dust.compile(source, "section5_sub2_li2");
    dust.loadSource(compiled);
    dust.render("section5_sub2_li2", data.data, function(err, out) {
        $("#section5_sub2_li2").html(out);    
    });
    var source   = $("#section5_sub2_li3").html();
    var compiled = dust.compile(source, "section5_sub2_li3");
    dust.loadSource(compiled);
    dust.render("section5_sub2_li3", data.data, function(err, out) {
        $("#section5_sub2_li3").html(out);    
    });
    var source   = $("#section6_heading").html();
    var compiled = dust.compile(source, "section6_heading");
    dust.loadSource(compiled);
    dust.render("section6_heading", data.data, function(err, out) {
        $("#section6_heading").html(out);    
    });
    var source   = $("#footer_heading1").html();
    var compiled = dust.compile(source, "footer_heading1");
    dust.loadSource(compiled);
    dust.render("footer_heading1", data.data, function(err, out) {
        $("#footer_heading1").html(out);    
    });
    var source   = $("#footer_h1_link1").html();
    var compiled = dust.compile(source, "footer_h1_link1");
    dust.loadSource(compiled);
    dust.render("footer_h1_link1", data.data, function(err, out) {
        $("#footer_h1_link1").html(out);    
    });
    var source   = $("#footer_h1_link2").html();
    var compiled = dust.compile(source, "footer_h1_link2");
    dust.loadSource(compiled);
    dust.render("footer_h1_link2", data.data, function(err, out) {
        $("#footer_h1_link2").html(out);    
    });
    var source   = $("#footer_heading2").html();
    var compiled = dust.compile(source, "footer_heading2");
    dust.loadSource(compiled);
    dust.render("footer_heading2", data.data, function(err, out) {
        $("#footer_heading2").html(out);    
    });
    var source   = $("#footer_h2_link1").html();
    var compiled = dust.compile(source, "footer_h2_link1");
    dust.loadSource(compiled);
    dust.render("footer_h2_link1", data.data, function(err, out) {
        $("#footer_h2_link1").html(out);    
    });
    var source   = $("#footer_h2_link2").html();
    var compiled = dust.compile(source, "footer_h2_link2");
    dust.loadSource(compiled);
    dust.render("footer_h2_link2", data.data, function(err, out) {
        $("#footer_h2_link2").html(out);    
    });
    var source   = $("#footer_h2_link3").html();
    var compiled = dust.compile(source, "footer_h2_link3");
    dust.loadSource(compiled);
    dust.render("footer_h2_link3", data.data, function(err, out) {
        $("#footer_h2_link3").html(out);    
    });
    var source   = $("#footer_h2_link4").html();
    var compiled = dust.compile(source, "footer_h2_link4");
    dust.loadSource(compiled);
    dust.render("footer_h2_link4", data.data, function(err, out) {
        $("#footer_h2_link4").html(out);    
    });
    var source   = $("#footer_heading3").html();
    var compiled = dust.compile(source, "footer_heading3");
    dust.loadSource(compiled);
    dust.render("footer_heading3", data.data, function(err, out) {
        $("#footer_heading3").html(out);    
    });
    var source   = $("#footer_h3_link1").html();
    var compiled = dust.compile(source, "footer_h3_link1");
    dust.loadSource(compiled);
    dust.render("footer_h3_link1", data.data, function(err, out) {
        $("#footer_h3_link1").html(out);    
    });
    var source   = $("#footer_h3_link2").html();
    var compiled = dust.compile(source, "footer_h3_link2");
    dust.loadSource(compiled);
    dust.render("footer_h3_link2", data.data, function(err, out) {
        $("#footer_h3_link2").html(out);    
    });
    var source   = $("#footer_h3_link3").html();
    var compiled = dust.compile(source, "footer_h3_link3");
    dust.loadSource(compiled);
    dust.render("footer_h3_link3", data.data, function(err, out) {
        $("#footer_h3_link3").html(out);    
    });
    var source   = $("#footer_h3_link4").html();
    var compiled = dust.compile(source, "footer_h3_link4");
    dust.loadSource(compiled);
    dust.render("footer_h3_link4", data.data, function(err, out) {
        $("#footer_h3_link4").html(out);    
    });
    var source   = $("#footer_heading4").html();
    var compiled = dust.compile(source, "footer_heading4");
    dust.loadSource(compiled);
    dust.render("footer_heading4", data.data, function(err, out) {
        $("#footer_heading4").html(out);    
    });
    var source   = $("#footer_h4_link1").html();
    var compiled = dust.compile(source, "footer_h4_link1");
    dust.loadSource(compiled);
    dust.render("footer_h4_link1", data.data, function(err, out) {
        $("#footer_h4_link1").html(out);    
    });
    var source   = $("#footer_h4_link2").html();
    var compiled = dust.compile(source, "footer_h4_link2");
    dust.loadSource(compiled);
    dust.render("footer_h4_link2", data.data, function(err, out) {
        $("#footer_h4_link2").html(out);    
    });
    var source   = $("#footer_h4_link3").html();
    var compiled = dust.compile(source, "footer_h4_link3");
    dust.loadSource(compiled);
    dust.render("footer_h4_link3", data.data, function(err, out) {
        $("#footer_h4_link3").html(out);    
    });
    var source   = $("#footer_heading5").html();
    var compiled = dust.compile(source, "footer_heading5");
    dust.loadSource(compiled);
    dust.render("footer_heading5", data.data, function(err, out) {
        $("#footer_heading5").html(out);    
    });
  }});
});
