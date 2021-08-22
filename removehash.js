	 window.addEventListener(&quot;load&quot;, function remove_hash_from_url()
{
    var uri = window.location.toString();
    if (uri.indexOf(&quot;#&quot;) &gt; 0) {
        var clean_uri = uri.substring(0, uri.indexOf(&quot;#&quot;));
        window.history.replaceState({}, document.title, clean_uri);
    }
});
