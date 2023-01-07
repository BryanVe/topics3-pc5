<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/root">
    <html>
      <body>
        <h1>Courses</h1>
        <section class="courses-container">

          <xsl:for-each select="course">
            <div class="course-card">
              <div class="course-card-header">
                <span class="course-card-place">
                  >>
                  <xsl:value-of select="place" />
                </span>
              </div>
              <div class="course-card-body">
                <span class="course-card-title">
                  <xsl:value-of select="title" />
                </span>
                <div class="course-card-info">
                  <span class="course-card-id">
                    <xsl:value-of select="crse" />
                  </span>
                  <xsl:choose>
                    <xsl:when test="units = 0.0">
                      <span class="course-card-credits">
                        1.0
                      </span>
                    </xsl:when>
                    <xsl:otherwise>
                      <span class="course-card-credits">
                        <xsl:value-of select="units" />
                      </span>
                    </xsl:otherwise>
                  </xsl:choose>
                </div>
              </div>
              <div class="course-card-footer">
                <div class="course-card-key-value">
                  <span class="course-card-key">Instructor:</span>
                  <span class="course-card-value">
                    <xsl:value-of select="instructor" />
                  </span>
                </div>
                <div class="course-card-key-value">
                  <span class="course-card-key">Subject:</span>
                  <span class="course-card-value">
                    <xsl:value-of select="subj" />
                  </span>
                </div>
                <div class="course-card-key-value">
                  <span class="course-card-key">Section:</span>
                  <span class="course-card-value">
                    <xsl:value-of select="sect" />
                  </span>
                </div>
                <div class="course-card-key-value">
                  <span class="course-card-key">Days:</span>
                  <span class="course-card-value">
                    <xsl:value-of select="days" />
                  </span>
                </div>
              </div>
            </div>
          </xsl:for-each>
        </section>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>