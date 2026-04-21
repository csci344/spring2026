#!/usr/bin/env bash
# Run from any directory: paths below are relative to this script's folder.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# zip everything:
python3 zip_it.py ../activities
python3 zip_it.py ../homework
python3 zip_it.py ../lectures
# python3 zip_it.py ../practice-quizzes
python3 zip_it.py ../tutorials
python3 zip_it.py ../exams



# python3 zip_it.py ../practice_exams
# python3 zip_it.py ../projects

# build indexes:
# python build_navigator.py ../.
