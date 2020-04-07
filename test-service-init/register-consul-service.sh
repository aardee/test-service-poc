#!/bin/sh

cat <<EOF > service.rendered.json
{
  "Name": "test-service",
  "Tags": [
    "Test Service"
  ],
  "Address": "${POD_IP}",
  "Port": 3002,
  "Check": {
    "Method": "GET",
    "HTTP": "http://${POD_IP}:3002/health",
    "Interval": "1s"
  }
}
EOF

curl \
    --request PUT \
    --data @service.rendered.json \
    "http://$HOST_IP:8500/v1/agent/service/register"
