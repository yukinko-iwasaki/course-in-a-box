
<div class="module_container">

        {% for module in site.data.course.modules%}
        {% assign agenda =site.data.course.agenda[module]%}
        {% assign first_post = site.categories[module]|reverse|first %}
        <div class="module">
            
            <a href="{{ site.baseurl }}{{ first_post.url }}">
                <img src={{agenda.img}}>
            </a>
            <div class = "description">
                <a href="{{ site.baseurl }}{{ first_post.url }}"><b>{{agenda.title}} </b><br/></a>
                <ul class="square">
                    {% for sub_module in agenda.sub-modules %}
                        <!-- {% if forloop.first == true %}
                            {% continue %}
                        {% else %} -->
                            {% assign post = site.categories[module][forloop.rindex0 ] %}
                                <a href="{{ site.baseurl }}{{ post.url }}">
                                    <li>{{sub_module}} </li>
                                </a>
                        <!-- {% endif %} -->
                    {% endfor %}
                </ul>
            </div>
        </div>
        {% endfor %}
</div>