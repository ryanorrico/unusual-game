<script>
  import { userDocuments, user } from "../../../stores";
  import Api from "../../../utils/api";
  import { fly } from "svelte/transition";
  import PublishPostToggle from "../_components/PublishPostToggle.svelte";
  import { ready } from "@roxi/routify";

  if (window.routify.inBrowser) {
    async function fetchUserDocs() {
      const data = await Api.get(`/users/${$user.id}/documents`);
      $userDocuments = data.documents;
      $ready();
    }
    $: fetchUserDocs();
  }
</script>

<style>
  a.preview-post {
    width: 20px;
  }
  svg {
    fill: gray;
  }
</style>

<div class="hidden sm:block">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col mt-2">
      <div
        class="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th
                class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Documents
              </th>
              <th
                class="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Author
              </th>
              <th
                class="hidden px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block">
                Status
              </th>
              <th
                class="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {#if $userDocuments}
              {#each $userDocuments as document}
                <tr class="bg-white">
                  <td
                    class="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div class="flex">
                      <!-- href="/admin/posts/{document.slug}" -->
                      <div class="group inline-flex space-x-2 truncate text-sm">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path
                            fill-rule="evenodd"
                            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd" />
                        </svg>
                        <p
                          class="text-gray-500 truncate group-hover:text-gray-900">
                          {document.title}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                    <span class="text-gray-900">{$user.name} </span>
                  </td>
                  <td
                    class="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                    <div class="flex items-center space-x-2">
                      <PublishPostToggle {document} {userDocuments} />
                      {#if document.post_id}
                        <a
                          transition:fly|local={{ y: -10 }}
                          class="preview-post"
                          href="/blog/{document.slug}"
                          target="_blank">
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 101 101">
                            <g transform="matrix(1 0 0 1 1687.3 1126)">
                              <path
                                d="M-1636.8-1025c27.7,0,50.5-22.9,50.5-50.5c0-27.6-22.9-50.5-50.6-50.5c-27.6,0-50.4,22.9-50.4,50.5
                                  C-1687.3-1047.8-1664.4-1025-1636.8-1025z M-1614.2-1099.2c6.4,6.4,5.9,14.4-1.5,21.8l-8.5,8.5c0.8-2.6,0.6-5.9-0.2-7.7l4.7-4.6
                                  c5-4.9,5.5-10.1,1.6-14s-9-3.2-14,1.7l-6.7,6.8c-5.1,5-5.7,10.2-1.9,14.1c1.2,1.1,3,2.1,5,2.4c-0.7,1.7-2.5,3.8-4,4.9
                                  c-1.4-0.4-3.3-1.6-4.9-3.3c-6.5-6.3-5.9-14.5,1.7-21.9l7.1-7C-1628.5-1105-1620.6-1105.5-1614.2-1099.2z M-1661.2-1051.9
                                  c-6.4-6.4-5.9-14.4,1.5-21.8l8.5-8.4c-0.8,2.6-0.6,5.9,0.2,7.7l-4.6,4.6c-5,4.9-5.5,10.1-1.6,13.9c3.9,3.9,9,3.2,14-1.7l6.7-6.8
                                  c5.1-5,5.7-10.2,1.9-14.1c-1.2-1.1-3-2.1-5-2.4c0.7-1.7,2.5-3.8,4-4.8c1.4,0.3,3.4,1.6,5,3.3c6.5,6.4,5.9,14.5-1.7,21.9l-7.1,7
                                  C-1646.9-1046.1-1654.9-1045.5-1661.2-1051.9z" />
                            </g>
                          </svg>
                        </a>
                      {/if}
                    </div>
                  </td>
                  <td
                    class="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                    {document.created_at}
                  </td>
                </tr>
              {/each}
            {:else}...{/if}
          </tbody>
        </table>

        <nav
          class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
          aria-label="Pagination">
          <div class="hidden sm:block">
            <p class="text-sm text-gray-700">
              Showing
              <span class="font-medium">1</span>
              to
              <span class="font-medium">10</span>
              of
              <span class="font-medium">20</span>
              results
            </p>
          </div>
          <div class="flex-1 flex justify-between sm:justify-end">
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </a>
            <a
              href="#"
              class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Next
            </a>
          </div>
        </nav>
      </div>
    </div>
  </div>
</div>
