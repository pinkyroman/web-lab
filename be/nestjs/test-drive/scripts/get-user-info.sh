#!/bin/bash
USER_ID=$1
TOKEN=$2
curl http://localhost:3000/users/$USER_ID -H "Authorization: Bearer $TOKEN" -v
echo ""
