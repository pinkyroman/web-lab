#!/bin/bash
VERIFY_TOKEN=$1
curl -X POST "http://localhost:3000/users/email-verify?signupVerifyToken=$VERIFY_TOKEN" -v
