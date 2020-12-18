#!/bin/bash
set -e

args=("$@")

if [ $# -lt 1 ]; then
      echo "No arguments supplied"
      exit -1
fi

pushd "${args[0]}"
yarn install
yarn build
popd
pwd

if [[ "${args[0]}" = "vue-app" ]]; then
    echo "vue-app"
    rm -Rf dist
    mv -v vue-app/dist dist
elif [[ "${args[0]}" = "levitate" ]]; then
    echo "levitate"
    rm -Rf dist
    mv -v levitate/build dist
fi

