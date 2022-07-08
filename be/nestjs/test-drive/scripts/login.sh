#!/bin/bash
curl -X POST http://localhost:3000/users/login -H "Content-Type: application/json" -d '{"email": "ghildong.hong@world.email.com", "password": "rlfehd!123"}' -v
echo ""
