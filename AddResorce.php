<?php

if ($editing && has_capability('moodle/course:create', context_system::instance())) {
        echo $courserenderer->add_new_course_button();
}