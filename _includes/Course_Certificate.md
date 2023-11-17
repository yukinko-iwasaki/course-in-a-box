In order to successfully complete the course and receive a course certificate, you need to fulfil the following requirements:
<ul class="square List">

    <li>
        Complete the course <a href={{site.data.course.Quizzes["baseline"].url}}>baseline knowledge test </a> by <b> 29 December 2023 at 9:00 AM ET/GMT </b>
    </li>
    <li>
         Complete all 4 module quizzes by <b> 13 December 2023 at 11:59 PM ET/GMT </b> with an average score of 80% across all quizzes.
         <!-- {%include Quizzes.md %} -->
         <ul class="square">
        {% for module in site.data.course.modules %}
            {% assign agenda=site.data.course.agenda[module] %}
            <li><a href={{site.data.course.Quizzes[module].url}} target="_blank">{{agenda.title|capitalize}} </a>  </li>
        {% endfor %}
</ul>

    </li>
    <li>
        Complete the course <a href="{{site.data.course.Quizzes["endline"].url}}">endline knowledge test</a> by  <b> 13 December 2023 at 11:59 PM ET/GMT </b>.
    </li>
</ul>


Check the following link for the course tracker:
Click<a target="_blank" href="https://docs.google.com/spreadsheets/d/1wK2k4bGN4Gt5cAQAPDeB2Du_xpRNbA3-SjcgPZYXUDQ/edit#gid=1137564209"> here </a>!

