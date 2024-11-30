<?xml version="1.0" encoding="utf-8"?>
<!--
  Catppuccin feed by Sapphic Angels.
  Licensed under the zlib license.
-->

<xsl:stylesheet
  version="3.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
>
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en" dir="ltr">
      <head>
        <title>RSS feed for <xsl:value-of select="/rss/channel/title"/></title>
        <meta charset="UTF-8" />
        <meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1" />
        <meta http-equiv="content-language" content="en_US" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="/rss/style.css" />
        <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&amp;display=swap" rel="stylesheet" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1,shrink-to-fit=no"
        />
        <meta name="referrer" content="none" />
      </head>

      <body>
        <div class="container">
          <div class="item">
            <header>
              <h1 class="title">
                <img src="/favicon.png" height="30" weight="30" />
                <xsl:value-of select="/rss/channel/title" />
              </h1>

              <p>
                <xsl:value-of select="/rss/channel/description" />
              </p>

              <div class="banner">
                <div class="banner-header"></div>
              </div>
            </header>

            <main>
              <h2>## Articles</h2>

              <xsl:for-each select="/rss/channel/item">
                <article>
                  <h2 class="title">
                    <a hreflang="en" target="_blank">
                      <xsl:attribute name="href">
                        <xsl:value-of select="link" />
                      </xsl:attribute>

                      <xsl:value-of select="title" />
                    </a>
                  </h2>

                  <p>Tags:
                    <xsl:for-each select="category">
                      <a href="https://sapphic.moe/articles/tag/{.}" target="_blank">
                        <span>
                          <xsl:value-of select="." />
                        </span>
                      </a>
                      <xsl:if test="position() != last()">, </xsl:if>
                    </xsl:for-each>
                  </p>

                  <footer>
                    Created on
                    <time>
                      <xsl:value-of select="prettyDate" />
                    </time>
                  </footer>
                </article>
              </xsl:for-each>

              <footer>
                <hr />

                <p>© 2016-2024 Sapphic Angels.</p>

                <div class="footer-links">
                  <a hreflang="en" target="_blank">
                    <xsl:attribute name="href">
                      <xsl:value-of select="/rss/channel/link" />
                    </xsl:attribute>
                    Visit website
                  </a>

                  <span>•</span>

                  <a href="https://ko-fi.com/solelychloe" target="_blank">
                    Support us
                  </a>

                  <span>•</span>

                  <a
                    href="https://github.com/SapphicMoe/sapphic.moe"
                    target="_blank"
                  >
                    Source code
                  </a>
                </div>
              </footer>
            </main>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
