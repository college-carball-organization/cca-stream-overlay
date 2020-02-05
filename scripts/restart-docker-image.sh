eval "$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )/kill_docker_image.sh"
eval "$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )/build_docker_image.sh" \
  && eval "$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )/run_docker_image.sh"
