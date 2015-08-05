
function go () {

  var translateReddit = function(linkJSON){

    var a = [];

    var translateRedditRecursive = function(replies){
      if(! replies)
        return;

      var children = replies.data.children;
      for(var i = 0; i < children.length; ++i){

        translateRedditRecursive(children[i].replies)
        delete children[i].replies;
        children[i].data.parent_id = children[i].data.parent_id.substring(3);
        a.push(children[i].data);
      }

    }

    var first = linkJSON[0].data.children[0].data;

    if(!!first.selftext)
      first.body = first.selftext;
    else
      first.body = first.url

    a.push(first);

    translateRedditRecursive(linkJSON[1]);

    return a;
  }

  var reddit = [{"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t3", "data": {"domain": "marxists.org", "banned_by": null, "media_embed": {}, "subreddit": "philosophy", "selftext_html": null, "selftext": "", "likes": null, "suggested_sort": null, "user_reports": [], "secure_media": null, "link_flair_text": "Article", "id": "3fqiay", "from_kind": null, "gilded": 0, "archived": false, "clicked": false, "report_reasons": null, "author": "mosestrod", "media": null, "name": "t3_3fqiay", "score": 101, "approved_by": null, "over_18": false, "hidden": false, "thumbnail": "", "subreddit_id": "t5_2qh5b", "edited": false, "link_flair_css_class": "article", "author_flair_css_class": null, "downs": 0, "mod_reports": [], "secure_media_embed": {}, "saved": false, "removal_reason": null, "stickied": false, "from": null, "is_self": false, "from_id": null, "permalink": "/r/philosophy/comments/3fqiay/the_hegel_myth_and_its_method_by_walter_kaufmann/", "hide_score": false, "created": 1438716904.0, "url": "https://www.marxists.org/reference/subject/philosophy/works/us/kaufmann.htm", "author_flair_text": null, "title": "The Hegel Myth and Its Method by Walter Kaufmann", "created_utc": 1438688104.0, "ups": 101, "upvote_ratio": 0.81, "num_comments": 22, "visited": false, "num_reports": null, "distinguished": null}}], "after": null, "before": null}}, {"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": {"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": "", "user_reports": [], "saved": false, "id": "ctrqhy0", "gilded": 0, "archived": false, "report_reasons": null, "author": "IAMACOWAMA", "parent_id": "t1_ctr9jat", "score": 1, "approved_by": null, "controversiality": 0, "body": "I've only read Hegel's translations of Nietzsche and his work on some other Existentialists but this sounds very interesting. Do you know if his translation and commentary on Preface to the Phenomenology of Spirit is available online?", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;I&amp;#39;ve only read Hegel&amp;#39;s translations of Nietzsche and his work on some other Existentialists but this sounds very interesting. Do you know if his translation and commentary on Preface to the Phenomenology of Spirit is available online?&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctrqhy0", "created": 1438761766.0, "author_flair_text": null, "created_utc": 1438732966.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 1}}], "after": null, "before": null}}, "user_reports": [], "saved": false, "id": "ctr9jat", "gilded": 0, "archived": false, "report_reasons": null, "author": "bat020", "parent_id": "t3_3fqiay", "score": 13, "approved_by": null, "controversiality": 0, "body": "Kaufmann is brilliant and sadly neglected these days. His translation of and commentary on Hegel's Preface to the Phenomenology of Spirit is by far the best English language rendition of Hegel I've read. Pity he didn't do more. And this is a fabulous takedown of Popper's fatuously ignorant but hugely influential dismissal of Hegel.", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;Kaufmann is brilliant and sadly neglected these days. His translation of and commentary on Hegel&amp;#39;s Preface to the Phenomenology of Spirit is by far the best English language rendition of Hegel I&amp;#39;ve read. Pity he didn&amp;#39;t do more. And this is a fabulous takedown of Popper&amp;#39;s fatuously ignorant but hugely influential dismissal of Hegel.&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctr9jat", "created": 1438736288.0, "author_flair_text": null, "created_utc": 1438707488.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 13}}, {"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": "", "user_reports": [], "saved": false, "id": "ctr6qv9", "gilded": 0, "archived": false, "report_reasons": null, "author": "TrigThaTaco", "parent_id": "t3_3fqiay", "score": 6, "approved_by": null, "controversiality": 0, "body": "&gt;A detailed account of his almost incredibly unemotional style as a lecturer has been given by one of his students, H. G. Hotho, and is quoted in Hermann Glockner\u2019s Hegel (1, 440 ff.), and in Kuno Fischer\u2019s Hegel\n\nDoes anyone have this story? ", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;blockquote&gt;\n&lt;p&gt;A detailed account of his almost incredibly unemotional style as a lecturer has been given by one of his students, H. G. Hotho, and is quoted in Hermann Glockner\u2019s Hegel (1, 440 ff.), and in Kuno Fischer\u2019s Hegel&lt;/p&gt;\n&lt;/blockquote&gt;\n\n&lt;p&gt;Does anyone have this story? &lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctr6qv9", "created": 1438732189.0, "author_flair_text": null, "created_utc": 1438703389.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 6}}, {"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": "", "user_reports": [], "saved": false, "id": "ctrcw4n", "gilded": 0, "archived": false, "report_reasons": null, "author": "Mrhegel", "parent_id": "t3_3fqiay", "score": 6, "approved_by": null, "controversiality": 0, "body": "Great article by Kaufmann. Really well written and a great example of how someone can use misinformation to manipulate readers. Popper clearly banks on the fact that his readers are very unfamiliar with Hegel and can use that fact to make his own ideas look great. Especially when saying that his ideas can be seen in the Nazi belief. I dont believe Hegel would have been to happy with that. His ideas are too rational to be thrown in with the irrational way the Nazi party operated. Especially if you look at the way the Right Hegelians took his teachings. They believed that the State was the Ideal and to push for political change was an attack on not only the nation, but the people that the nation stood for. This is also kind of ironic seeing as his master-slave dialectic was a big influence on Marx and his ideas about class struggle. ", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;Great article by Kaufmann. Really well written and a great example of how someone can use misinformation to manipulate readers. Popper clearly banks on the fact that his readers are very unfamiliar with Hegel and can use that fact to make his own ideas look great. Especially when saying that his ideas can be seen in the Nazi belief. I dont believe Hegel would have been to happy with that. His ideas are too rational to be thrown in with the irrational way the Nazi party operated. Especially if you look at the way the Right Hegelians took his teachings. They believed that the State was the Ideal and to push for political change was an attack on not only the nation, but the people that the nation stood for. This is also kind of ironic seeing as his master-slave dialectic was a big influence on Marx and his ideas about class struggle. &lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctrcw4n", "created": 1438741066.0, "author_flair_text": null, "created_utc": 1438712266.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 6}}, {"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": {"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": "", "user_reports": [], "saved": false, "id": "ctrjp26", "gilded": 0, "archived": false, "report_reasons": null, "author": "Capn_Fappn", "parent_id": "t1_ctr4cf7", "score": 1, "approved_by": null, "controversiality": 0, "body": "I can't believe you humorless dipshits would downvote such brilliance.", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;I can&amp;#39;t believe you humorless dipshits would downvote such brilliance.&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctrjp26", "created": 1438750714.0, "author_flair_text": null, "created_utc": 1438721914.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 1}}], "after": null, "before": null}}, "user_reports": [], "saved": false, "id": "ctr4cf7", "gilded": 0, "archived": false, "report_reasons": null, "author": "[deleted]", "parent_id": "t3_3fqiay", "score": -25, "approved_by": null, "controversiality": 0, "body": "[deleted]", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;[deleted]&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctr4cf7", "created": 1438728360.0, "author_flair_text": null, "created_utc": 1438699560.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": -25}}, {"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": {"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": {"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": {"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": {"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": {"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": {"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": {"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": {"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": "", "user_reports": [], "saved": false, "id": "ctrgsur", "gilded": 0, "archived": false, "report_reasons": null, "author": "PresidentCleveland", "parent_id": "t1_ctrgonc", "score": 0, "approved_by": null, "controversiality": 0, "body": "It's the website it's from. ", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;It&amp;#39;s the website it&amp;#39;s from. &lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctrgsur", "created": 1438746599.0, "author_flair_text": null, "created_utc": 1438717799.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 0}}], "after": null, "before": null}}, "user_reports": [], "saved": false, "id": "ctrgonc", "gilded": 0, "archived": false, "report_reasons": null, "author": "[deleted]", "parent_id": "t1_ctrgls9", "score": 2, "approved_by": null, "controversiality": 0, "body": "[deleted]", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;[deleted]&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctrgonc", "created": 1438746440.0, "author_flair_text": null, "created_utc": 1438717640.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 2}}], "after": null, "before": null}}, "user_reports": [], "saved": false, "id": "ctrgls9", "gilded": 0, "archived": false, "report_reasons": null, "author": "[deleted]", "parent_id": "t1_ctrd8tb", "score": 0, "approved_by": null, "controversiality": 0, "body": "[deleted]", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;[deleted]&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctrgls9", "created": 1438746331.0, "author_flair_text": null, "created_utc": 1438717531.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 0}}], "after": null, "before": null}}, "user_reports": [], "saved": false, "id": "ctrd8tb", "gilded": 0, "archived": false, "report_reasons": null, "author": "mosestrod", "parent_id": "t1_ctragnq", "score": 6, "approved_by": null, "controversiality": 0, "body": "it doesn't show a damn thing. Marxists.org is just a good resource in a good easy to read format. Next you'll be saying the Stanford Encyclopedia of Philosophy is just a bourgeois liberal source that reflects the hegemony of 'mainstream' academic interpretations of philosophers or an anglo-american tending source...or something. Marxists.org has works by most major philosophers in the western tradition.", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;it doesn&amp;#39;t show a damn thing. Marxists.org is just a good resource in a good easy to read format. Next you&amp;#39;ll be saying the Stanford Encyclopedia of Philosophy is just a bourgeois liberal source that reflects the hegemony of &amp;#39;mainstream&amp;#39; academic interpretations of philosophers or an anglo-american tending source...or something. Marxists.org has works by most major philosophers in the western tradition.&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctrd8tb", "created": 1438741575.0, "author_flair_text": null, "created_utc": 1438712775.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 6}}, {"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": "", "user_reports": [], "saved": false, "id": "ctrb0vd", "gilded": 0, "archived": false, "report_reasons": null, "author": "[deleted]", "parent_id": "t1_ctragnq", "score": 3, "approved_by": null, "controversiality": 0, "body": "[deleted]", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;[deleted]&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctrb0vd", "created": 1438738423.0, "author_flair_text": null, "created_utc": 1438709623.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 3}}], "after": null, "before": null}}, "user_reports": [], "saved": false, "id": "ctragnq", "gilded": 0, "archived": false, "report_reasons": null, "author": "[deleted]", "parent_id": "t1_ctrafhc", "score": -12, "approved_by": null, "controversiality": 0, "body": "[deleted]", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;[deleted]&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctragnq", "created": 1438737629.0, "author_flair_text": null, "created_utc": 1438708829.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": -12}}], "after": null, "before": null}}, "user_reports": [], "saved": false, "id": "ctrafhc", "gilded": 0, "archived": false, "report_reasons": null, "author": "[deleted]", "parent_id": "t1_ctr9d3a", "score": 5, "approved_by": null, "controversiality": 0, "body": "[deleted]", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;[deleted]&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctrafhc", "created": 1438737579.0, "author_flair_text": null, "created_utc": 1438708779.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 5}}], "after": null, "before": null}}, "user_reports": [], "saved": false, "id": "ctr9d3a", "gilded": 0, "archived": false, "report_reasons": null, "author": "PresidentCleveland", "parent_id": "t1_ctr94b8", "score": -12, "approved_by": null, "controversiality": 0, "body": "I know who Kaufmann is. I wasn't commenting on him, I was commenting on the website being linked.", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;I know who Kaufmann is. I wasn&amp;#39;t commenting on him, I was commenting on the website being linked.&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctr9d3a", "created": 1438736037.0, "author_flair_text": null, "created_utc": 1438707237.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": -12}}], "after": null, "before": null}}, "user_reports": [], "saved": false, "id": "ctr94b8", "gilded": 0, "archived": false, "report_reasons": null, "author": "[deleted]", "parent_id": "t1_ctr8tv9", "score": 9, "approved_by": null, "controversiality": 0, "body": "[deleted]", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;[deleted]&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctr94b8", "created": 1438735692.0, "author_flair_text": null, "created_utc": 1438706892.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 9}}, {"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": {"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": "", "user_reports": [], "saved": false, "id": "ctrgqoi", "gilded": 0, "archived": false, "report_reasons": null, "author": "PresidentCleveland", "parent_id": "t1_ctraqda", "score": 1, "approved_by": null, "controversiality": 0, "body": "That can be found anywhere else. I don't see what your point is, Mr Taylor seems to be a Marxist. ", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;That can be found anywhere else. I don&amp;#39;t see what your point is, Mr Taylor seems to be a Marxist. &lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctrgqoi", "created": 1438746517.0, "author_flair_text": null, "created_utc": 1438717717.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 1}}], "after": null, "before": null}}, "user_reports": [], "saved": false, "id": "ctraqda", "gilded": 0, "archived": false, "report_reasons": null, "author": "[deleted]", "parent_id": "t1_ctr8tv9", "score": 5, "approved_by": null, "controversiality": 0, "body": "[deleted]", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;[deleted]&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctraqda", "created": 1438738012.0, "author_flair_text": null, "created_utc": 1438709212.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 5}}, {"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": "", "user_reports": [], "saved": false, "id": "ctrdvo6", "gilded": 0, "archived": false, "report_reasons": null, "author": "[deleted]", "parent_id": "t1_ctr8tv9", "score": -3, "approved_by": null, "controversiality": 0, "body": "[deleted]", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;[deleted]&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctrdvo6", "created": 1438742493.0, "author_flair_text": null, "created_utc": 1438713693.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": -3}}], "after": null, "before": null}}, "user_reports": [], "saved": false, "id": "ctr8tv9", "gilded": 0, "archived": false, "report_reasons": null, "author": "[deleted]", "parent_id": "t3_3fqiay", "score": -23, "approved_by": null, "controversiality": 0, "body": "[deleted]", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;[deleted]&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctr8tv9", "created": 1438735271.0, "author_flair_text": null, "created_utc": 1438706471.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": -23}}], "after": null, "before": null}}]

  var reddit2 = [
   {
      "kind":"Listing",
      "data":{
         "modhash":"",
         "children":[
            {
               "kind":"t3",
               "data":{
                  "domain":"plato.stanford.edu",
                  "banned_by":null,
                  "media_embed":{

                  },
                  "subreddit":"philosophy",
                  "selftext_html":null,
                  "selftext":"",
                  "likes":null,
                  "suggested_sort":null,
                  "user_reports":[

                  ],
                  "secure_media":null,
                  "link_flair_text":"Article",
                  "id":"3fkrgy",
                  "from_kind":null,
                  "gilded":0,
                  "archived":false,
                  "clicked":false,
                  "report_reasons":null,
                  "author":"thinkonthebrink",
                  "media":null,
                  "name":"t3_3fkrgy",
                  "score":0,
                  "approved_by":null,
                  "over_18":false,
                  "hidden":false,
                  "thumbnail":"",
                  "subreddit_id":"t5_2qh5b",
                  "edited":false,
                  "link_flair_css_class":"article",
                  "author_flair_css_class":null,
                  "downs":0,
                  "mod_reports":[

                  ],
                  "secure_media_embed":{

                  },
                  "saved":false,
                  "removal_reason":null,
                  "stickied":false,
                  "from":null,
                  "is_self":false,
                  "from_id":null,
                  "permalink":"/r/philosophy/comments/3fkrgy/the_problem_of_induction/",
                  "hide_score":false,
                  "created":1438599438.0,
                  "url":"http://plato.stanford.edu/entries/induction-problem/#KarPopVieInd",
                  "author_flair_text":null,
                  "title":"The problem of induction",
                  "created_utc":1438570638.0,
                  "ups":0,
                  "upvote_ratio":0.5,
                  "num_comments":3,
                  "visited":false,
                  "num_reports":null,
                  "distinguished":null
               }
            }
         ],
         "after":null,
         "before":null
      }
   },
   {
      "kind":"Listing",
      "data":{
         "modhash":"",
         "children":[
            {
               "kind":"t1",
               "data":{
                  "subreddit_id":"t5_2qh5b",
                  "banned_by":null,
                  "removal_reason":null,
                  "link_id":"t3_3fkrgy",
                  "likes":null,
                  "replies":{
                     "kind":"Listing",
                     "data":{
                        "modhash":"",
                        "children":[
                           {
                              "kind":"t1",
                              "data":{
                                 "subreddit_id":"t5_2qh5b",
                                 "banned_by":null,
                                 "removal_reason":null,
                                 "link_id":"t3_3fkrgy",
                                 "likes":null,
                                 "replies":"",
                                 "user_reports":[
                                 ],
                                 "saved":false,
                                 "id":"ctqr08h",
                                 "gilded":0,
                                 "archived":false,
                                 "report_reasons":null,
                                 "author":"thinkonthebrink",
                                 "parent_id":"t1_ctpj0rl",
                                 "score":1,
                                 "approved_by":null,
                                 "controversiality":0,
                                 "body":"thanx m8",
                                 "edited":false,
                                 "author_flair_css_class":null,
                                 "downs":0,
                                 "body_html":"&lt;div class=\"md\"&gt;&lt;p&gt;thanx m8&lt;/p&gt;\n&lt;/div&gt;",
                                 "subreddit":"philosophy",
                                 "score_hidden":false,
                                 "name":"t1_ctqr08h",
                                 "created":1438690099.0,
                                 "author_flair_text":null,
                                 "created_utc":1438661299.0,
                                 "distinguished":null,
                                 "mod_reports":[

                                 ],
                                 "num_reports":null,
                                 "ups":1
                              }
                           }
                        ],
                        "after":null,
                        "before":null
                     }
                  },
                  "user_reports":[

                  ],
                  "saved":false,
                  "id":"ctpj0rl",
                  "gilded":0,
                  "archived":false,
                  "report_reasons":null,
                  "author":"ReallyNicole",
                  "parent_id":"t3_3fkrgy",
                  "score":2,
                  "approved_by":null,
                  "controversiality":0,
                  "body":"Maybe you'd like to link to the article in general rather than a point halfway through it?",
                  "edited":false,
                  "author_flair_css_class":null,
                  "downs":0,
                  "body_html":"&lt;div class=\"md\"&gt;&lt;p&gt;Maybe you&amp;#39;d like to link to the article in general rather than a point halfway through it?&lt;/p&gt;\n&lt;/div&gt;",
                  "subreddit":"philosophy",
                  "score_hidden":false,
                  "name":"t1_ctpj0rl",
                  "created":1438575251.0,
                  "author_flair_text":"\u03a6",
                  "created_utc":1438571651.0,
                  "distinguished":"moderator",
                  "mod_reports":[

                  ],
                  "num_reports":null,
                  "ups":2
               }
            }
         ],
         "after":null,
         "before":null
      }
   }
]

  var reddit3 = [
   {
      "kind":"Listing",
      "data":{
         "modhash":"",
         "children":[
            {
               "kind":"t3",
               "data":{
                  "domain":"self.movies",
                  "banned_by":null,
                  "media_embed":{

                  },
                  "subreddit":"movies",
                  "selftext_html":"&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;What do you watch when you want to stop feeling down? &lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
                  "selftext":"What do you watch when you want to stop feeling down? ",
                  "likes":null,
                  "suggested_sort":null,
                  "user_reports":[

                  ],
                  "secure_media":null,
                  "link_flair_text":"Discussion",
                  "id":"3ftwhr",
                  "from_kind":null,
                  "gilded":0,
                  "archived":false,
                  "clicked":false,
                  "report_reasons":null,
                  "author":"MollFlanders",
                  "media":null,
                  "name":"t3_3ftwhr",
                  "score":2,
                  "approved_by":null,
                  "over_18":false,
                  "hidden":false,
                  "thumbnail":"self",
                  "subreddit_id":"t5_2qh3s",
                  "edited":false,
                  "link_flair_css_class":"discussion",
                  "author_flair_css_class":null,
                  "downs":0,
                  "mod_reports":[

                  ],
                  "secure_media_embed":{

                  },
                  "saved":false,
                  "removal_reason":null,
                  "stickied":false,
                  "from":null,
                  "is_self":true,
                  "from_id":null,
                  "permalink":"/r/movies/comments/3ftwhr/i_was_just_the_recipient_of_some_pretty_bad_news/",
                  "hide_score":true,
                  "created":1438772660.0,
                  "url":"http://www.reddit.com/r/movies/comments/3ftwhr/i_was_just_the_recipient_of_some_pretty_bad_news/",
                  "author_flair_text":null,
                  "title":"I was just the recipient of some pretty bad news. What's a good movie to watch when you just want to turn your brain off and stop feeling sad?",
                  "created_utc":1438743860.0,
                  "ups":2,
                  "upvote_ratio":1.0,
                  "num_comments":3,
                  "visited":false,
                  "num_reports":null,
                  "distinguished":null
               }
            }
         ],
         "after":null,
         "before":null
      }
   },
   {
      "kind":"Listing",
      "data":{
         "modhash":"",
         "children":[
            {
               "kind":"t1",
               "data":{
                  "subreddit_id":"t5_2qh3s",
                  "banned_by":null,
                  "removal_reason":null,
                  "link_id":"t3_3ftwhr",
                  "likes":null,
                  "replies":{
                     "kind":"Listing",
                     "data":{
                        "modhash":"",
                        "children":[
                           {
                              "kind":"t1",
                              "data":{
                                 "subreddit_id":"t5_2qh3s",
                                 "banned_by":null,
                                 "removal_reason":null,
                                 "link_id":"t3_3ftwhr",
                                 "likes":null,
                                 "replies":"",
                                 "user_reports":[

                                 ],
                                 "saved":false,
                                 "id":"ctrwwcr",
                                 "gilded":0,
                                 "archived":false,
                                 "report_reasons":null,
                                 "author":"MollFlanders",
                                 "parent_id":"t1_ctrwuzq",
                                 "score":1,
                                 "approved_by":null,
                                 "controversiality":0,
                                 "body":"I love Austin Powers. That's a great suggestion. And thank you :) ",
                                 "edited":false,
                                 "author_flair_css_class":null,
                                 "downs":0,
                                 "body_html":"&lt;div class=\"md\"&gt;&lt;p&gt;I love Austin Powers. That&amp;#39;s a great suggestion. And thank you :) &lt;/p&gt;\n&lt;/div&gt;",
                                 "subreddit":"movies",
                                 "score_hidden":false,
                                 "name":"t1_ctrwwcr",
                                 "created":1438772854.0,
                                 "author_flair_text":null,
                                 "created_utc":1438744054.0,
                                 "distinguished":null,
                                 "mod_reports":[

                                 ],
                                 "num_reports":null,
                                 "ups":1
                              }
                           }
                        ],
                        "after":null,
                        "before":null
                     }
                  },
                  "user_reports":[

                  ],
                  "saved":false,
                  "id":"ctrwuzq",
                  "gilded":0,
                  "archived":false,
                  "report_reasons":null,
                  "author":"titsandwich",
                  "parent_id":"t3_3ftwhr",
                  "score":2,
                  "approved_by":null,
                  "controversiality":0,
                  "body":"Something really stupid but funny nonetheless. Ace Ventura When Nature Calls or Austin Powers comes to mind. I hope your day gets better!",
                  "edited":false,
                  "author_flair_css_class":null,
                  "downs":0,
                  "body_html":"&lt;div class=\"md\"&gt;&lt;p&gt;Something really stupid but funny nonetheless. Ace Ventura When Nature Calls or Austin Powers comes to mind. I hope your day gets better!&lt;/p&gt;\n&lt;/div&gt;",
                  "subreddit":"movies",
                  "score_hidden":false,
                  "name":"t1_ctrwuzq",
                  "created":1438772779.0,
                  "author_flair_text":null,
                  "created_utc":1438743979.0,
                  "distinguished":null,
                  "mod_reports":[

                  ],
                  "num_reports":null,
                  "ups":2
               }
            },
            {
               "kind":"t1",
               "data":{
                  "subreddit_id":"t5_2qh3s",
                  "banned_by":null,
                  "removal_reason":null,
                  "link_id":"t3_3ftwhr",
                  "likes":null,
                  "replies":"",
                  "user_reports":[

                  ],
                  "saved":false,
                  "id":"ctrwvmj",
                  "gilded":0,
                  "archived":false,
                  "report_reasons":null,
                  "author":"bluegirlcat",
                  "parent_id":"t3_3ftwhr",
                  "score":1,
                  "approved_by":null,
                  "controversiality":0,
                  "body":"Star Trek IV ",
                  "edited":false,
                  "author_flair_css_class":null,
                  "downs":0,
                  "body_html":"&lt;div class=\"md\"&gt;&lt;p&gt;Star Trek IV &lt;/p&gt;\n&lt;/div&gt;",
                  "subreddit":"movies",
                  "score_hidden":false,
                  "name":"t1_ctrwvmj",
                  "created":1438772815.0,
                  "author_flair_text":null,
                  "created_utc":1438744015.0,
                  "distinguished":null,
                  "mod_reports":[

                  ],
                  "num_reports":null,
                  "ups":1
               }
            }
         ],
         "after":null,
         "before":null
      }
   }
]

  var testdata = [
    {
      _id:"1",
      body:"first!",
      target_id:null
    },
    {
      _id:"2",
      body:"second",
      target_id:"1"
    },
    {
      _id:"3",
      body:"third",
      target_id:"1"
    },
    {
      _id:"4",
      body:"fourther",
      target_id:"2"
    },
    {
      _id:"5",
      body:"figth",
      target_id:"3"
    },
    {
      _id:"6",
      body:"6th",
      target_id:"2"
    }
  ]

  console.log(translateReddit(reddit3))

  var onmouseover = function(data){
    console.log(data);
  }

  var redditmap = {
    target_id:"parent_id",
    _id:"id"
  }

  var nebula = new Nebula("#graph", 800, 600, onmouseover, translateReddit(reddit3));

  console.log(nebula);
}
