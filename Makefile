REPORTER ?= dot
SRC = $(shell find -name "*.js" -type f | sort)
SUPPORT = $(wildcard support/*.js)

all: mercator-grid.js

test: test-unit
