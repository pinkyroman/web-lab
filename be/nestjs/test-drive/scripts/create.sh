#!/bin/bash
curl http://localhost:3000/users -H "Content-Type: application/json" -d '{"name": "홍길동", "email": "ghildong.hong@world.email.com", "password": "rlfehd!123"}' -v
echo ""
