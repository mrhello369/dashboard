# Copyright 2023 The KubeFin Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

FROM node:18 as build

# Create app directory
WORKDIR /app

COPY web/package*.json ./

RUN npm install

COPY  web/ ./

RUN npm run build

FROM nginx:1.22-alpine as prod

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx-config/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
