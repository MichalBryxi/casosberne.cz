#!/bin/bash

DB='casosberne'

dropdb $DB
heroku pg:pull DATABASE_URL $DB --app=casosberne-cz
