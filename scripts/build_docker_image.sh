docker build                                               \
  -t cca-stream-overlay                                    \
  --no-cache                                               \
  "$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )/../"
